import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, ShoppingCart, Users, Eye, AlertCircle, Plus } from 'lucide-react';

export default function Dashboard() {
    // KPIs
    const stats = [
        {
            title: 'Ventas del Día',
            value: '$2,450.00',
            change: '+12.5%',
            icon: ShoppingCart,
            color: 'bg-blue-500'
        },
        {
            title: 'Transacciones',
            value: '24',
            change: '+8%',
            icon: TrendingUp,
            color: 'bg-green-500'
        },
        {
            title: 'Clientes Nuevos',
            value: '8',
            change: '+3',
            icon: Users,
            color: 'bg-purple-500'
        },
        {
            title: 'Stock Bajo',
            value: '5 productos',
            change: 'Acción requerida',
            icon: AlertCircle,
            color: 'bg-red-500'
        }
    ];

    // Últimas transacciones
    const transactions = [
        {
            id: 'TRX001',
            customer: 'Juan Pérez',
            product: 'Gafas de Sol Clásicas',
            amount: '$89.99',
            time: '10:30 AM',
            status: 'Completado'
        },
        {
            id: 'TRX002',
            customer: 'María García',
            product: 'Gafas Progresivas',
            amount: '$199.99',
            time: '10:15 AM',
            status: 'Completado'
        },
        {
            id: 'TRX003',
            customer: 'Carlos López',
            product: 'Gafas Gaming Pro (x2)',
            amount: '$259.98',
            time: '09:45 AM',
            status: 'Completado'
        },
        {
            id: 'TRX004',
            customer: 'Ana Martínez',
            product: 'Gafas Deportivas',
            amount: '$159.99',
            time: '09:20 AM',
            status: 'Pendiente'
        },
        {
            id: 'TRX005',
            customer: 'Roberto Silva',
            product: 'Lentes de Contacto',
            amount: '$45.50',
            time: '09:00 AM',
            status: 'Completado'
        },
        {
            id: 'TRX006',
            customer: 'Laura Fernández',
            product: 'Gafas de Sol Clásicas',
            amount: '$89.99',
            time: '08:30 AM',
            status: 'Completado'
        },
        {
            id: 'TRX007',
            customer: 'Jorge Martínez',
            product: 'Gafas Progresivas',
            amount: '$199.99',
            time: '08:15 AM',
            status: 'Completado'
        },
        {
            id: 'TRX008',
            customer: 'Patricia López',
            product: 'Gafas Gaming Pro (x2)',
            amount: '$259.98',
            time: '07:45 AM',
            status: 'Completado'
        },
        {
            id: 'TRX009',
            customer: 'Luis García',
            product: 'Gafas Deportivas',
            amount: '$159.99',
            time: '07:20 AM',
            status: 'Pendiente'
        },
        {
            id: 'TRX010',
            customer: 'Marta Sánchez',
            product: 'Lentes de Contacto',
            amount: '$45.50',
            time: '07:00 AM',
            status: 'Completado'
        }
    ];

    // Productos más vendidos
    const topProducts = [
        {
            id: 1,
            name: 'Gafas de Sol Clásicas',
            sold: 45,
            revenue: '$4,049.55',
            stock: 12
        },
        {
            id: 2,
            name: 'Gafas Gaming Pro',
            sold: 32,
            revenue: '$4,159.68',
            stock: 8
        },
        {
            id: 3,
            name: 'Gafas Progresivas',
            sold: 18,
            revenue: '$3,599.82',
            stock: 5
        },
        {
            id: 4,
            name: 'Gafas Deportivas',
            sold: 24,
            revenue: '$3,839.76',
            stock: 15
        }
    ];

    // Inventario crítico
    const lowStockItems = [
        { name: 'Gafas Progresivas', current: 5, reorder: 20 },
        { name: 'Monturas Premium', current: 3, reorder: 15 },
        { name: 'Lentes de Contacto', current: 7, reorder: 30 }
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Dashboard - Punto de Venta
                    </h2>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        Hoy: {new Date().toLocaleDateString('es-ES')}
                    </div>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    {/* KPIs Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {stats.map((stat, index) => {
                            const IconComponent = stat.icon;
                            return (
                                <Card key={index} className="dark:bg-gray-800">
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            {stat.title}
                                        </CardTitle>
                                        <div className={`${stat.color} p-2 rounded-lg`}>
                                            <IconComponent className="w-4 h-4 text-white" />
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">{stat.value}</div>
                                        <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                                            {stat.change}
                                        </p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Left Column - Transactions */}
                        <div className="lg:col-span-2">
                            <Card className="dark:bg-gray-800">
                                <CardHeader>
                                    <CardTitle>Últimas Transacciones</CardTitle>
                                    <CardDescription>Movimientos del punto de venta</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm">
                                            <thead>
                                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                                    <th className="text-left font-semibold py-2 px-2">ID</th>
                                                    <th className="text-left font-semibold py-2 px-2">Cliente</th>
                                                    <th className="text-left font-semibold py-2 px-2">Producto</th>
                                                    <th className="text-left font-semibold py-2 px-2">Monto</th>
                                                    <th className="text-left font-semibold py-2 px-2">Hora</th>
                                                    <th className="text-left font-semibold py-2 px-2">Estado</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {transactions.map((transaction) => (
                                                    <tr key={transaction.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                                                        <td className="py-3 px-2 font-mono text-xs text-blue-600">{transaction.id}</td>
                                                        <td className="py-3 px-2">{transaction.customer}</td>
                                                        <td className="py-3 px-2 truncate">{transaction.product}</td>
                                                        <td className="py-3 px-2 font-semibold">{transaction.amount}</td>
                                                        <td className="py-3 px-2 text-gray-500">{transaction.time}</td>
                                                        <td className="py-3 px-2">
                                                            <span className={`px-2 py-1 rounded text-xs font-semibold ${
                                                                transaction.status === 'Completado'
                                                                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                                                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                                                            }`}>
                                                                {transaction.status}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Right Column - Stock Alerts */}
                        <div>
                            <Card className="dark:bg-gray-800">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <AlertCircle className="w-5 h-5 text-red-500" />
                                        Stock Bajo
                                    </CardTitle>
                                    <CardDescription>Productos para reabastecer</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {lowStockItems.map((item, index) => (
                                        <div key={index} className="space-y-2">
                                            <div className="flex justify-between items-start">
                                                <p className="font-medium text-sm">{item.name}</p>
                                                <span className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 text-xs px-2 py-1 rounded">
                                                    {item.current}/{item.reorder}
                                                </span>
                                            </div>
                                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                                <div
                                                    className="bg-red-500 h-2 rounded-full"
                                                    style={{ width: `${(item.current / item.reorder) * 100}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                    <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                                        <Plus className="w-4 h-4 mr-2" />
                                        Reabastecer
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Products Performance */}
                    <Card className="dark:bg-gray-800">
                        <CardHeader>
                            <CardTitle>Productos Más Vendidos</CardTitle>
                            <CardDescription>Desempeño del mes actual</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-gray-200 dark:border-gray-700">
                                            <th className="text-left font-semibold py-2 px-2">Producto</th>
                                            <th className="text-left font-semibold py-2 px-2">Vendidos</th>
                                            <th className="text-left font-semibold py-2 px-2">Ingresos</th>
                                            <th className="text-left font-semibold py-2 px-2">Stock</th>
                                            <th className="text-left font-semibold py-2 px-2">Acción</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {topProducts.map((product) => (
                                            <tr key={product.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                                                <td className="py-3 px-2 font-medium">{product.name}</td>
                                                <td className="py-3 px-2">
                                                    <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded text-xs font-semibold">
                                                        {product.sold}
                                                    </span>
                                                </td>
                                                <td className="py-3 px-2 font-semibold text-green-600">{product.revenue}</td>
                                                <td className="py-3 px-2 text-gray-600">{product.stock} unidades</td>
                                                <td className="py-3 px-2">
                                                    <Button variant="outline" size="sm">
                                                        Ver Detalles
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Button className="bg-blue-600 hover:bg-blue-700 py-6 text-base">
                            <ShoppingCart className="w-5 h-5 mr-2" />
                            Nueva Venta
                        </Button>
                        <Button className="bg-green-600 hover:bg-green-700 py-6 text-base">
                            <Plus className="w-5 h-5 mr-2" />
                            Agregar Producto
                        </Button>
                        <Button className="bg-purple-600 hover:bg-purple-700 py-6 text-base">
                            <Eye className="w-5 h-5 mr-2" />
                            Generar Reporte
                        </Button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}