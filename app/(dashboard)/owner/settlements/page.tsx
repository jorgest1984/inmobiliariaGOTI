
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Download, Filter } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function OwnerSettlements() {
    const settlements = [
        { id: 'LIQ-02-26', date: '05/02/2026', period: 'Febrero 2026', total: 2400, status: 'paid', details: 'Renta Gran Vía, Renta Av. Paz' },
        { id: 'LIQ-01-26', date: '05/01/2026', period: 'Enero 2026', total: 2400, status: 'paid', details: 'Renta Gran Vía, Renta Av. Paz' },
        { id: 'LIQ-12-25', date: '05/12/2025', period: 'Diciembre 2025', total: 2400, status: 'paid', details: 'Renta Gran Vía, Renta Av. Paz' },
    ]

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Liquidaciones</h2>
                <p className="text-muted-foreground">Historial de pagos recibidos de la inmobiliaria.</p>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                        <CardTitle>Detalle de Liquidaciones</CardTitle>
                        <Button variant="outline" size="sm">
                            <Filter className="mr-2 h-4 w-4" /> Filtrar por Fecha
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Periodo</TableHead>
                                <TableHead>Fecha Liquidación</TableHead>
                                <TableHead>Conceptos</TableHead>
                                <TableHead>Importe Total</TableHead>
                                <TableHead>Estado</TableHead>
                                <TableHead className="text-right">Documento</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {settlements.map((settlement) => (
                                <TableRow key={settlement.id}>
                                    <TableCell className="font-medium">{settlement.period}</TableCell>
                                    <TableCell>{settlement.date}</TableCell>
                                    <TableCell className="max-w-[200px] truncate" title={settlement.details}>{settlement.details}</TableCell>
                                    <TableCell className="font-bold">{settlement.total} €</TableCell>
                                    <TableCell>
                                        <Badge variant="default">Pagado</Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="sm">
                                            <Download className="mr-2 h-4 w-4" /> PDF
                                        </Button>
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
