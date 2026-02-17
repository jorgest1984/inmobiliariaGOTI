
import { SiteHeader } from '@/components/site-header'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Bed, Bath, Square, MapPin, Phone, Mail, Calendar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default async function PropertyPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    // Mock Data - In real app, fetch(id)
    const property = {
        id,
        title: "Apartamento de Lujo en el Centro",
        address: "Calle Gran Vía 12, Madrid, 28013",
        price: 1200,
        description: "Espectacular apartamento totalmente reformado en el corazón de Madrid. Cuenta con acabados de primera calidad, suelos de madera, aire acondicionado y calefacción central. El edificio dispone de portero físico y ascensor. Ideal para parejas o ejecutivos.",
        images: [
            "https://placehold.co/800x600/2a2a2a/FFF?text=Living+Room",
            "https://placehold.co/800x600/2a2a2a/FFF?text=Bedroom",
            "https://placehold.co/800x600/2a2a2a/FFF?text=Kitchen",
            "https://placehold.co/800x600/2a2a2a/FFF?text=Bathroom",
        ],
        features: ["Aire Acondicionado", "Calefacción", "Ascensor", "Amueblado", "Electrodomésticos", "Armarios Empotrados"],
        beds: 2,
        baths: 2,
        sqft: 95,
        type: "rent",
        status: "available"
    }

    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1 container py-8">
                <div className="mb-6">
                    <Link href="/properties" className="text-sm text-muted-foreground hover:text-primary">
                        &larr; Volver a propiedades
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <div className="flex justify-between items-start">
                                <h1 className="text-3xl font-bold">{property.title}</h1>
                                <Badge variant="secondary" className="text-lg">
                                    {property.type === 'rent' ? 'Alquiler' : 'Venta'}
                                </Badge>
                            </div>
                            <div className="flex items-center text-muted-foreground mt-2">
                                <MapPin className="h-5 w-5 mr-2" />
                                {property.address}
                            </div>
                        </div>

                        {/* Images Grid */}
                        <div className="grid grid-cols-2 gap-2 rounded-xl overflow-hidden aspect-video">
                            <div className="col-span-2 row-span-2 relative">
                                <Image
                                    src={property.images[0]}
                                    alt="Main view"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        {/* Secondary images could go here in a carousel or grid if needed */}

                        {/* Key Stats */}
                        <div className="flex justify-between p-6 border rounded-lg bg-card text-card-foreground shadow-sm">
                            <div className="text-center">
                                <div className="flex items-center justify-center font-bold text-xl">
                                    <Bed className="mr-2 h-5 w-5 text-primary" /> {property.beds}
                                </div>
                                <div className="text-xs text-muted-foreground uppercase mt-1">Habitaciones</div>
                            </div>
                            <div className="h-full w-px bg-border" />
                            <div className="text-center">
                                <div className="flex items-center justify-center font-bold text-xl">
                                    <Bath className="mr-2 h-5 w-5 text-primary" /> {property.baths}
                                </div>
                                <div className="text-xs text-muted-foreground uppercase mt-1">Baños</div>
                            </div>
                            <div className="h-full w-px bg-border" />
                            <div className="text-center">
                                <div className="flex items-center justify-center font-bold text-xl">
                                    <Square className="mr-2 h-5 w-5 text-primary" /> {property.sqft}
                                </div>
                                <div className="text-xs text-muted-foreground uppercase mt-1">m² Útiles</div>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Descripción</h2>
                            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                {property.description}
                            </p>
                        </div>

                        {/* Features */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Características</h2>
                            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {property.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-sm">
                                        <span className="h-2 w-2 rounded-full bg-primary mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar Contact */}
                    <div className="space-y-6">
                        <div className="sticky top-24">
                            <div className="border rounded-lg p-6 bg-card shadow-sm space-y-6">
                                <div className="text-3xl font-bold text-primary">
                                    {new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(property.price)}
                                    {property.type === 'rent' && <span className="text-lg font-normal text-muted-foreground">/mes</span>}
                                </div>

                                <div className="space-y-4">
                                    <Button className="w-full h-12 text-lg">
                                        Contactar Agente
                                    </Button>
                                    <Button variant="outline" className="w-full h-12 text-lg">
                                        <Calendar className="mr-2 h-4 w-4" /> Solicitar Visita
                                    </Button>
                                </div>

                                <div className="pt-6 border-t space-y-4">
                                    <h3 className="font-semibold">Información de Contacto</h3>
                                    <div className="flex items-center text-sm">
                                        <Phone className="h-4 w-4 mr-3 text-muted-foreground" />
                                        <span>+34 912 345 678</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <Mail className="h-4 w-4 mr-3 text-muted-foreground" />
                                        <span>info@inmobiliariagoti.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
