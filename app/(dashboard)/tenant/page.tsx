
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, AlertCircle, CalendarClock, DollarSign } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function TenantDashboard() {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Hola, Juan!</h2>
                <p className="text-muted-foreground">Bienvenido a tu panel de inquilino. Aquí tienes un resumen.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Próximo Recibo</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1.200 €</div>
                        <p className="text-xs text-muted-foreground">Vence el 01/03/2026</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Contrato</CardTitle>
                        <CalendarClock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12 Meses</div>
                        <p className="text-xs text-muted-foreground">Finaliza en Feb 2027</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Incidencias Activas</CardTitle>
                        <AlertCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">0</div>
                        <p className="text-xs text-muted-foreground">Todo en orden</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Documentos</CardTitle>
                        <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">3</div>
                        <p className="text-xs text-muted-foreground">Contrato y Anexos</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                {/* Recent Activity / Receipts */}
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Últimos Recibos</CardTitle>
                        <CardDescription>Historial de tus últimos pagos de alquiler y suministros.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                { month: 'Febrero 2026', amount: '1.200 €', status: 'Pagado', date: '01/02/2026' },
                                { month: 'Enero 2026', amount: '1.200 €', status: 'Pagado', date: '01/01/2026' },
                                { month: 'Diciembre 2025', amount: '1.200 €', status: 'Pagado', date: '01/12/2025' },
                            ].map((receipt, i) => (
                                <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                                    <div>
                                        <p className="font-medium">{receipt.month}</p>
                                        <p className="text-sm text-muted-foreground">{receipt.date}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold">{receipt.amount}</p>
                                        <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                            {receipt.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Acciones Rápidas</CardTitle>
                        <CardDescription>Accesos directos frecuentes.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <Link href="/tenant/incidents/new">
                            <Button className="w-full justify-start" size="lg">
                                <AlertCircle className="mr-2 h-4 w-4" /> Reportar Incidencia
                            </Button>
                        </Link>
                        <Link href="/tenant/receipts">
                            <Button variant="outline" className="w-full justify-start" size="lg">
                                <FileText className="mr-2 h-4 w-4" /> Ver Todos los Recibos
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
