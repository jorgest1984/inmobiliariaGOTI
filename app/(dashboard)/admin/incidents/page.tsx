
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, AlertTriangle, MessageSquare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function AdminIncidents() {
    const incidents = [
        {
            id: 'INC-2026-001',
            title: 'Caldera no funciona',
            property: 'Calle Gran Vía 12',
            tenant: 'Juan Pérez',
            status: 'open',
            date: '17/02/2026',
            priority: 'high',
        },
        {
            id: 'INC-2026-003',
            title: 'Humedad en techo',
            property: 'Av. de la Paz 45',
            tenant: 'Carlos Ruiz',
            status: 'in_progress',
            date: '15/02/2026',
            priority: 'medium',
        },
        {
            id: 'INC-2025-045',
            title: 'Grifo gotea',
            property: 'Calle Pez 8',
            tenant: 'Ana García',
            status: 'resolved',
            date: '10/11/2025',
            priority: 'low',
        },
    ]

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Gestión de Incidencias</h2>
                <p className="text-muted-foreground">Supervisa y resuelve incidencias reportadas.</p>
            </div>

            <div className="grid gap-6">
                {incidents.map((incident) => (
                    <Card key={incident.id} className="overflow-hidden">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-muted/50">
                            <div className="space-y-1">
                                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                                    {incident.title}
                                    <Badge variant={
                                        incident.status === 'open' ? 'destructive' :
                                            incident.status === 'resolved' ? 'secondary' : 'default'
                                    }>
                                        {incident.status === 'open' ? 'Abierta' :
                                            incident.status === 'resolved' ? 'Resuelta' : 'En Progreso'}
                                    </Badge>
                                    <Badge variant="outline" className="text-xs font-normal bg-background">
                                        {incident.priority === 'high' ? 'Alta Prioridad' :
                                            incident.priority === 'medium' ? 'Media Prioridad' : 'Baja Prioridad'}
                                    </Badge>
                                </CardTitle>
                                <CardDescription>
                                    {incident.property} • Reportado por {incident.tenant} • {incident.date}
                                </CardDescription>
                            </div>
                            <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                    <MessageSquare className="mr-2 h-4 w-4" /> Contactar
                                </Button>
                                <Button size="sm">
                                    <CheckCircle className="mr-2 h-4 w-4" /> Resolver
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-4">
                            <div className="flex items-start gap-4">
                                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                                <div>
                                    <p className="text-sm font-medium">Descripción del problema:</p>
                                    <p className="text-sm text-muted-foreground">
                                        El inquilino reporta que {incident.title.toLowerCase()} desde hace varios días. Requiere visita de técnico.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
