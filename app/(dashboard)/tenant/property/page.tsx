
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MapPin, Calendar, FileText, Phone, Mail, User } from 'lucide-react'
import Image from 'next/image'

export default function TenantProperty() {
    const property = {
        address: "Calle Gran Vía 12, 4º Derecha",
        city: "Madrid, 28013",
        image: "https://placehold.co/800x400/2a2a2a/FFF?text=Mi+Vivienda",
        contractStart: "01/02/2026",
        contractEnd: "31/01/2027",
        rent: 1200,
        landlord: {
            name: "Juan Pérez",
            email: "juan.propietario@email.com",
            phone: "+34 600 000 000"
        }
    }

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Mi Vivienda</h2>
                <p className="text-muted-foreground">Información sobre tu contrato y la propiedad actual.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {/* Property Details */}
                <Card className="md:col-span-2 overflow-hidden">
                    <div className="h-48 w-full relative">
                        <Image
                            src={property.image}
                            alt="Property"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <CardHeader>
                        <div className="flex justify-between items-start">
                            <div>
                                <CardTitle className="text-xl">{property.address}</CardTitle>
                                <CardDescription className="flex items-center mt-1">
                                    <MapPin className="h-4 w-4 mr-1" /> {property.city}
                                </CardDescription>
                            </div>
                            <Badge className="bg-green-600">Contrato Activo</Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="grid gap-4 md:grid-cols-3">
                        <div className="flex flex-col space-y-1">
                            <span className="text-sm text-muted-foreground">Inicio Contrato</span>
                            <div className="flex items-center font-medium">
                                <Calendar className="h-4 w-4 mr-2" /> {property.contractStart}
                            </div>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <span className="text-sm text-muted-foreground">Fin Contrato</span>
                            <div className="flex items-center font-medium">
                                <Calendar className="h-4 w-4 mr-2" /> {property.contractEnd}
                            </div>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <span className="text-sm text-muted-foreground">Renta Mensual</span>
                            <div className="font-bold text-lg">
                                {property.rent} €
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Landlord Contact */}
                <Card>
                    <CardHeader>
                        <CardTitle>Contacto Propietario</CardTitle>
                        <CardDescription>Datos de contacto para urgencias o comunicaciones.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <div className="bg-primary/10 p-2 rounded-full">
                                <User className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm font-medium leading-none">{property.landlord.name}</p>
                                <p className="text-xs text-muted-foreground">Propietario</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-primary/10 p-2 rounded-full">
                                <Phone className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm font-medium leading-none">{property.landlord.phone}</p>
                                <p className="text-xs text-muted-foreground">Teléfono</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-primary/10 p-2 rounded-full">
                                <Mail className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm font-medium leading-none">{property.landlord.email}</p>
                                <p className="text-xs text-muted-foreground">Email</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Documents */}
                <Card>
                    <CardHeader>
                        <CardTitle>Documentación</CardTitle>
                        <CardDescription>Contrato y documentos relacionados.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <Button variant="outline" className="w-full justify-start h-auto py-3">
                            <FileText className="h-5 w-5 mr-3 text-blue-600" />
                            <div className="text-left">
                                <div className="font-medium">Contrato de Alquiler.pdf</div>
                                <div className="text-xs text-muted-foreground">Firmado el 01/01/2026</div>
                            </div>
                        </Button>
                        <Button variant="outline" className="w-full justify-start h-auto py-3">
                            <FileText className="h-5 w-5 mr-3 text-blue-600" />
                            <div className="text-left">
                                <div className="font-medium">Inventario.pdf</div>
                                <div className="text-xs text-muted-foreground">Anexo 1</div>
                            </div>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
