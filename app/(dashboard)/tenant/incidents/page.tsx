
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { PlusCircle, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export default function TenantIncidents() {
    const incidents = [
        {
            id: 'INC-2026-001',
            title: 'Caldera no funciona',
            status: 'open',
            date: '17/02/2026',
            priority: 'high',
            description: 'La caldera hace un ruido extraño y no calienta el agua.'
        },
        {
            id: 'INC-2025-045',
            title: 'Grifo gotea',
            status: 'resolved',
            date: '10/11/2025',
            priority: 'low',
            description: 'El grifo del baño principal gotea constantemente.'
        },
    ]

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Incidencias</h2>
                    <p className="text-muted-foreground">Reporta y sigue el estado de las incidencias en tu vivienda.</p>
                </div>
                <Link href="/tenant/incidents/new">
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" /> Nueva Incidencia
                    </Button>
                </Link>
            </div>

            <div className="grid gap-6">
                {incidents.map((incident) => (
                    <Card key={incident.id}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <div className="space-y-1">
                                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                                    {incident.title}
                                    <Badge variant={incident.status === 'open' ? 'destructive' : 'secondary'}>
                                        {incident.status === 'open' ? 'Abierta' : 'Resuelta'}
                                    </Badge>
                                    <Badge variant="outline" className="text-xs font-normal">
                                        {incident.priority === 'high' ? 'Alta Prioridad' : 'Baja Prioridad'}
                                    </Badge>
                                </CardTitle>
                                <CardDescription>
                                    Reportado el {incident.date} • ID: {incident.id}
                                </CardDescription>
                            </div>
                            <Button variant="ghost" size="sm" asChild>
                                <Link href="/tenant/chat">
                                    <MessageSquare className="mr-2 h-4 w-4" /> Chat
                                </Link>
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-foreground/80">{incident.description}</p>
                        </CardContent>
                    </Card>
                ))}

                {incidents.length === 0 && (
                    <Card className="flex flex-col items-center justify-center p-8 text-center text-muted-foreground border-dashed">
                        <div className="mb-4 rounded-full bg-muted p-4">
                            <PlusCircle className="h-8 w-8" />
                        </div>
                        <h3 className="text-lg font-semibold">No hay incidencias</h3>
                        <p className="mb-4 text-sm max-w-sm">
                            No tienes ninguna incidencia abierta en este momento. Si necesitas reportar algo, usa el botón de arriba.
                        </p>
                    </Card>
                )}
            </div>
        </div>
    )
}
