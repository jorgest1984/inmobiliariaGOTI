
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign, TrendingUp, Users, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function OwnerDashboard() {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Panel de Propietario</h2>
                <p className="text-muted-foreground">Resumen financiero y estado de tus propiedades.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Ingresos este mes</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">2.400 €</div>
                        <p className="text-xs text-muted-foreground">+20% vs mes pasado</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Propiedades Alquiladas</CardTitle>
                        <Home className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">2/3</div>
                        <p className="text-xs text-muted-foreground">1 Vacante</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Liquidación Pendiente</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">0 €</div>
                        <p className="text-xs text-muted-foreground">Todo liquidado</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Inquilinos</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">2</div>
                        <p className="text-xs text-muted-foreground">Activos</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Últimas Liquidaciones</CardTitle>
                        <CardDescription>Resumen de transferencias recibidas.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                { month: 'Febrero 2026', amount: '2.400 €', status: 'Pagado', date: '05/02/2026' },
                                { month: 'Enero 2026', amount: '2.400 €', status: 'Pagado', date: '05/01/2026' },
                                { month: 'Diciembre 2025', amount: '2.400 €', status: 'Pagado', date: '05/12/2025' },
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

                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Mis Propiedades</CardTitle>
                        <CardDescription>Estado actual de tus inmuebles.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none">Calle Gran Vía 12</p>
                                        <p className="text-xs text-muted-foreground">Alquilado - 1.200 €/mes</p>
                                    </div>
                                </div>
                                <div className="ml-auto font-medium text-green-600 text-sm">Activo</div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none">Av. de la Paz 45</p>
                                        <p className="text-xs text-muted-foreground">Alquilado - 1.200 €/mes</p>
                                    </div>
                                </div>
                                <div className="ml-auto font-medium text-green-600 text-sm">Activo</div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none">Calle Pez 8</p>
                                        <p className="text-xs text-muted-foreground">Vacante - 950 €/mes</p>
                                    </div>
                                </div>
                                <div className="ml-auto font-medium text-yellow-600 text-sm">En búsqueda</div>
                            </div>
                            <Link href="/owner/properties">
                                <Button variant="outline" className="w-full mt-4" size="sm">
                                    Ver Detalles
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
