import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Printer, ArrowLeft } from "lucide-react";

export default function OrderShow({ order }: { order: any }) {
    
    const handlePrint = () => {
        window.print();
    };

    return (
        <AuthenticatedLayout header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200">Detalle de Venta</h2>}>
            <Head title={`Venta #${order.id}`} />

            <div className="py-12">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                    
                    {/* Botones de Acción (No salen en la impresión) */}
                    <div className="mb-6 flex justify-between print:hidden">
                        <Link href={route('dashboard')}>
                            <Button variant="outline"><ArrowLeft className="mr-2 h-4 w-4" /> Volver</Button>
                        </Link>
                        <Button onClick={handlePrint}>
                            <Printer className="mr-2 h-4 w-4" /> Imprimir Ticket
                        </Button>
                    </div>

                    {/* El Ticket */}
                    <Card className="print:shadow-none print:border-none">
                        <CardHeader className="text-center border-b">
                            <CardTitle className="text-2xl font-bold">ÓPTICA VISIÓN</CardTitle>
                            <p className="text-sm text-gray-500">NIT: 900.123.456-7</p>
                            <p className="text-sm text-gray-500">Calle Falsa 123, Ibagué</p>
                            <div className="mt-4 text-left">
                                <p><strong>Orden #:</strong> {order.id.toString().padStart(6, '0')}</p>
                                <p><strong>Fecha:</strong> {new Date(order.created_at).toLocaleString()}</p>
                                <p><strong>Cliente:</strong> {order.client.name}</p>
                                <p><strong>Atendido por:</strong> {order.user.name}</p>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Producto</TableHead>
                                        <TableHead className="text-center">Cant.</TableHead>
                                        <TableHead className="text-right">Precio</TableHead>
                                        <TableHead className="text-right">Subtotal</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {order.items.map((item: any) => (
                                        <TableRow key={item.id}>
                                            <TableCell>{item.product.name}</TableCell>
                                            <TableCell className="text-center">{item.quantity}</TableCell>
                                            <TableCell className="text-right">${parseFloat(item.price).toLocaleString()}</TableCell>
                                            <TableCell className="text-right font-bold">
                                                ${(item.quantity * parseFloat(item.price)).toLocaleString()}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                        <CardFooter className="flex flex-col items-end border-t pt-4">
                            <div className="text-2xl font-bold">
                                TOTAL: ${parseFloat(order.total).toLocaleString()}
                            </div>
                            <p className="text-xs text-gray-400 mt-2">Gracias por su compra</p>
                        </CardFooter>
                    </Card>

                </div>
            </div>
            
            {/* Estilos para impresión: Ocultar sidebar y header al imprimir */}
            <style>{`
                @media print {
                    nav, header, aside, .print\\:hidden { display: none !important; }
                    main { margin: 0; padding: 0; }
                    .card { border: none; shadow: none; }
                }
            `}</style>
        </AuthenticatedLayout>
    );
}