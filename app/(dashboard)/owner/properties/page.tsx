
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MapPin, Home, TrendingUp, Users } from 'lucide-react'
import Image from 'next/image'

export default function OwnerProperties() {
    const properties = [
        {
            id: "1",
            address: "Calle Gran Vía 12, 4º Derecha",
            city: "Madrid, 28013",
            image: "https://placehold.co/800x400/2a2a2a/FFF?text=Gran+Via",
            status: "rented",
            rent: 1200,
            tenant: "Juan Pérez"
        },
        {
            id: "2",
            address: "Av. de la Paz 45",
            city: "Pozuelo, 28223",
            image: "https://placehold.co/800x400/2a2a2a/FFF?text=Pozuelo",
            status: "rented",
            rent: 1200,
            tenant: "María López"
        },
        {
            id: "3",
            address: "Calle Pez 8",
            city: "Madrid, 28004",
            image: "https://placehold.co/800x400/2a2a2a/FFF?text=Malasana",
            status: "vacant",
            rent: 950,
            tenant: "-"
        }
    ]

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Mis Propiedades</h2>
                <p className="text-muted-foreground">Gestión de tus inmuebles y su estado actual.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {properties.map((property) => (
                    <Card key={property.id} className="overflow-hidden flex flex-col">
                        <div className="h-48 w-full relative">
                            <Image
                                src={property.image}
                                alt={property.address}
                                fill
                                className="object-cover"
                            />
                            <Badge className={`absolute top-2 right-2 ${property.status === 'rented' ? 'bg-green-600' : 'bg-yellow-600'}`}>
                                {property.status === 'rented' ? 'Alquilado' : 'Vacante'}
                            </Badge>
                        </div>
                        <CardHeader>
                            <CardTitle className="line-clamp-1 text-lg">{property.address}</CardTitle>
                            <CardDescription className="flex items-center">
                                <MapPin className="h-3 w-3 mr-1" /> {property.city}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1 space-y-4">
                            <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center text-muted-foreground">
                                    <TrendingUp className="h-4 w-4 mr-2" /> Renta
                                </div>
                                <div className="font-bold">{property.rent} €/mes</div>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center text-muted-foreground">
                                    <Users className="h-4 w-4 mr-2" /> Inquilino
                                </div>
                                <div className="font-medium">{property.tenant}</div>
                            </div>

                            <div className="pt-4 mt-auto">
                                <Button variant="outline" className="w-full">
                                    Ver Detalles Completo
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
