
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Building, Users, AlertCircle, TrendingUp, Activity } from 'lucide-react'

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Panel de Administración</h2>
                <p className="text-muted-foreground">Visión general del estado de la inmobiliaria.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Propiedades Totales</CardTitle>
                        <Building className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">45</div>
                        <p className="text-xs text-muted-foreground">32 Alquiladas / 13 En Venta</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Incidencias Abiertas</CardTitle>
                        <AlertCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">5</div>
                        <p className="text-xs text-muted-foreground">2 Alta Prioridad</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Usuarios Activos</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">89</div>
                        <p className="text-xs text-muted-foreground">+4 nuevos este mes</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Facturación Mes</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">24.500 €</div>
                        <p className="text-xs text-muted-foreground">+12% vs mes anterior</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Última Actividad</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-8">
                            <div className="flex items-center">
                                <Activity className="mr-4 h-4 w-4 text-muted-foreground" />
                                <div className="ml-4 space-y-1">
                                    <p className="text-sm font-medium leading-none">Nuevo Contrato Firmado</p>
                                    <p className="text-sm text-muted-foreground">
                                        Apartamento Gran Vía 12 - Inquilino: Juan Pérez
                                    </p>
                                </div>
                                <div className="ml-auto font-medium">Hace 2h</div>
                            </div>
                            <div className="flex items-center">
                                <Activity className="mr-4 h-4 w-4 text-muted-foreground" />
                                <div className="ml-4 space-y-1">
                                    <p className="text-sm font-medium leading-none">Incidencia Resuelta</p>
                                    <p className="text-sm text-muted-foreground">
                                        Grifo gotea - Calle Pez 8
                                    </p>
                                </div>
                                <div className="ml-auto font-medium">Hace 5h</div>
                            </div>
                            <div className="flex items-center">
                                <Activity className="mr-4 h-4 w-4 text-muted-foreground" />
                                <div className="ml-4 space-y-1">
                                    <p className="text-sm font-medium leading-none">Nueva Propiedad en Venta</p>
                                    <p className="text-sm text-muted-foreground">
                                        Chalet Pozuelo - Propietario: María García
                                    </p>
                                </div>
                                <div className="ml-auto font-medium">Ayer</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Estado de Ocupación</CardTitle>
                        <CardDescription>Resumen visual de propiedades.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span>Alquiladas</span>
                                <span className="font-bold">71%</span>
                            </div>
                            <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                                <div className="bg-green-500 h-full w-[71%]" />
                            </div>

                            <div className="flex items-center justify-between">
                                <span>En Venta</span>
                                <span className="font-bold">20%</span>
                            </div>
                            <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                                <div className="bg-blue-500 h-full w-[20%]" />
                            </div>

                            <div className="flex items-center justify-between">
                                <span>Vacantes (Alquiler)</span>
                                <span className="font-bold">9%</span>
                            </div>
                            <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                                <div className="bg-yellow-500 h-full w-[9%]" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
