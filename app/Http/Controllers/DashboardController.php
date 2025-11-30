<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;

class DashboardController extends Controller
{
    public function index()
    {
        // 1. Calcular totales
        $totalSales = Order::sum('total');
        $todaySales = Order::whereDate('created_at', Carbon::today())->sum('total');
        $totalClients = Client::count();
        
        // 2. Productos con stock bajo (menos de 5 unidades)
        $lowStockCount = Product::where('stock', '<', 5)->count();

        // 3. Últimas 5 ventas con el nombre del cliente
        $recentOrders = Order::with('client')
            ->latest()
            ->take(5)
            ->get();

        return Inertia::render('Dashboard', [
            'metrics' => [
                'total_sales' => $totalSales,
                'today_sales' => $todaySales,
                'total_clients' => $totalClients,
                'low_stock' => $lowStockCount,
            ],
            'recent_orders' => $recentOrders
        ]);
    }
}