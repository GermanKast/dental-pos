import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from 'react';

// Definimos el tipo de dato para TypeScript
type Product = {
    id: number;
    code: string;
    name: string;
    brand: string;
    price: string;
    stock: number;
    type: string;
};

export default function ProductsIndex({ products }: { products: Product[] }) {
    const [open, setOpen] = useState(false);
    
    // Formulario de Inertia (maneja el envío y errores solo)
    const { data, setData, post, processing, reset, errors } = useForm({
        code: '',
        name: '',
        brand: '',
        price: '',
        stock: '',
        type: 'frame', // Valor por defecto
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('products.store'), {
            onSuccess: () => {
                setOpen(false); // Cerrar modal
                reset();        // Limpiar formulario
            },
        });
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Inventario</h2>}
        >
            <Head title="Inventario" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
                        
                        {/* Cabecera con Botón de Crear */}
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Listado de Productos</h3>
                            
                            <Dialog open={open} onOpenChange={setOpen}>
                                <DialogTrigger asChild>
                                    <Button>+ Nuevo Producto</Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Agregar Producto al Inventario</DialogTitle>
                                    </DialogHeader>
                                    
                                    <form onSubmit={submit} className="space-y-4 mt-4">
                                        <div>
                                            <Label htmlFor="code">Código</Label>
                                            <Input id="code" value={data.code} onChange={e => setData('code', e.target.value)} placeholder="Ej: RAY-001" required />
                                            {errors.code && <div className="text-red-500 text-sm">{errors.code}</div>}
                                        </div>
                                        <div>
                                            <Label htmlFor="name">Nombre</Label>
                                            <Input id="name" value={data.name} onChange={e => setData('name', e.target.value)} placeholder="Ej: Gafas Aviador" required />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="brand">Marca</Label>
                                                <Input id="brand" value={data.brand} onChange={e => setData('brand', e.target.value)} required />
                                            </div>
                                            <div>
                                                <Label htmlFor="type">Tipo</Label>
                                                <select 
                                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                                    value={data.type} 
                                                    onChange={e => setData('type', e.target.value)}
                                                >
                                                    <option value="frame">Montura</option>
                                                    <option value="lens">Lente</option>
                                                    <option value="accessory">Accesorio</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="price">Precio</Label>
                                                <Input id="price" type="number" value={data.price} onChange={e => setData('price', e.target.value)} required />
                                            </div>
                                            <div>
                                                <Label htmlFor="stock">Stock Inicial</Label>
                                                <Input id="stock" type="number" value={data.stock} onChange={e => setData('stock', e.target.value)} required />
                                            </div>
                                        </div>
                                        <div className="flex justify-end mt-4">
                                            <Button type="submit" disabled={processing}>Guardar Producto</Button>
                                        </div>
                                    </form>
                                </DialogContent>
                            </Dialog>
                        </div>

                        {/* Tabla de Productos */}
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Código</TableHead>
                                    <TableHead>Nombre</TableHead>
                                    <TableHead>Marca</TableHead>
                                    <TableHead>Tipo</TableHead>
                                    <TableHead className="text-right">Precio</TableHead>
                                    <TableHead className="text-right">Stock</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {products.map((product) => (
                                    <TableRow key={product.id}>
                                        <TableCell className="font-medium">{product.code}</TableCell>
                                        <TableCell>{product.name}</TableCell>
                                        <TableCell>{product.brand}</TableCell>
                                        <TableCell>
                                            <span className={`px-2 py-1 rounded text-xs ${product.type === 'frame' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                                                {product.type === 'frame' ? 'Montura' : (product.type === 'lens' ? 'Lente' : 'Accesorio')}
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-right">${parseFloat(product.price).toLocaleString()}</TableCell>
                                        <TableCell className="text-right">{product.stock}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}