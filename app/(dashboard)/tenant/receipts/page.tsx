
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Download, CreditCard, Filter } from 'lucide-react'
import Link from 'next/link'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function TenantReceipts() {
    const receipts = [
        { id: 'REC-001', month: 'Febrero 2026', amount: 1200, type: 'Alquiler', status: 'pending', date: '01/02/2026', dueDate: '05/02/2026' },
        { id: 'REC-002', month: 'Enero 2026', amount: 1200, type: 'Alquiler', status: 'paid', date: '01/01/2026', dueDate: '05/01/2026' },
        { id: 'REC-003', month: 'Diciembre 2025', amount: 150, type: 'Suministros', status: 'paid', date: '15/12/2025', dueDate: '20/12/2025' },
        { id: 'REC-004', month: 'Diciembre 2025', amount: 1200, type: 'Alquiler', status: 'paid', date: '01/12/2025', dueDate: '05/12/2025' },
    ]

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Mis Recibos</h2>
                    <p className="text-muted-foreground">Consulta y paga tus recibos de alquiler y suministros.</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button asChild>
                        <Link href="/tenant/payments">
                            <CreditCard className="mr-2 h-4 w-4" /> Pagar Pendientes
                        </Link>
                    </Button>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                        <CardTitle>Historial de Pagos</CardTitle>
                        <div className="flex gap-2">
                            <Input placeholder="Buscar recibo..." className="w-[200px]" />
                            <Select defaultValue="all">
                                <SelectTrigger className="w-[150px]">
                                    <SelectValue placeholder="Estado" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Todos</SelectItem>
                                    <SelectItem value="pending">Pendientes</SelectItem>
                                    <SelectItem value="paid">Pagados</SelectItem>
                                </SelectContent>
                            </Select>
                            <Button variant="outline" size="icon">
                                <Filter className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Concepto</TableHead>
                                <TableHead>Fecha Emisión</TableHead>
                                <TableHead>Fecha Vencimiento</TableHead>
                                <TableHead>Importe</TableHead>
                                <TableHead>Estado</TableHead>
                                <TableHead className="text-right">Acciones</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {receipts.map((receipt) => (
                                <TableRow key={receipt.id}>
                                    <TableCell className="font-medium">
                                        {receipt.type} - {receipt.month}
                                        <div className="text-xs text-muted-foreground md:hidden">{receipt.id}</div>
                                    </TableCell>
                                    <TableCell>{receipt.date}</TableCell>
                                    <TableCell>{receipt.dueDate}</TableCell>
                                    <TableCell className="font-bold">{receipt.amount} €</TableCell>
                                    <TableCell>
                                        <Badge variant={receipt.status === 'paid' ? 'default' : receipt.status === 'pending' ? 'destructive' : 'secondary'}>
                                            {receipt.status === 'paid' ? 'Pagado' : receipt.status === 'pending' ? 'Pendiente' : receipt.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="icon">
                                            <Download className="h-4 w-4" />
                                        </Button>
                                        {receipt.status === 'pending' && (
                                            <Button size="sm" className="ml-2">Pagar</Button>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
