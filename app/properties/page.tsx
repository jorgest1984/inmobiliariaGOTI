
import { SiteHeader } from '@/components/site-header'
import { PropertyCard } from '@/components/properties/property-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'

export default function PropertiesPage() {
    // Dummy data - in a real app this would come from Supabase
    const properties = [
        {
            id: "1",
            title: "Apartamento de Lujo en el Centro",
            address: "Calle Gran Vía 12, Madrid",
            price: 1200,
            image: "https://placehold.co/600x400/2a2a2a/FFF?text=Luxury+Apartment",
            beds: 2,
            baths: 2,
            sqft: 95,
            type: "rent" as const
        },
        {
            id: "2",
            title: "Chalet Familiar con Jardín",
            address: "Av. de la Paz 45, Pozuelo",
            price: 450000,
            image: "https://placehold.co/600x400/2a2a2a/FFF?text=Family+House",
            beds: 4,
            baths: 3,
            sqft: 250,
            type: "sale" as const
        },
        {
            id: "3",
            title: "Loft Moderno en Zona Artística",
            address: "Calle Pez 8, Madrid",
            price: 950,
            image: "https://placehold.co/600x400/2a2a2a/FFF?text=Modern+Loft",
            beds: 1,
            baths: 1,
            sqft: 60,
            type: "rent" as const
        },
        {
            id: "4",
            title: "Ático con Terraza",
            address: "Paseo de la Castellana 200, Madrid",
            price: 1800,
            image: "https://placehold.co/600x400/2a2a2a/FFF?text=Penthouse",
            beds: 3,
            baths: 2,
            sqft: 120,
            type: "rent" as const
        },
        {
            id: "5",
            title: "Piso Reformado en Malasaña",
            address: "Calle Espíritu Santo 5, Madrid",
            price: 320000,
            image: "https://placehold.co/600x400/2a2a2a/FFF?text=Renovated+Flat",
            beds: 2,
            baths: 1,
            sqft: 75,
            type: "sale" as const
        }
    ]

    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1 container py-8">
                <h1 className="text-3xl font-bold mb-8">Propiedades Disponibles</h1>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Filters Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg">Filtrar por</h3>

                            <div className="space-y-2">
                                <Label>Tipo de Operación</Label>
                                <Select defaultValue="all">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleccionar" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">Todos</SelectItem>
                                        <SelectItem value="rent">Alquiler</SelectItem>
                                        <SelectItem value="sale">Venta</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label>Tipo de Propiedad</Label>
                                <Select defaultValue="all">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleccionar" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">Todos</SelectItem>
                                        <SelectItem value="apartment">Piso</SelectItem>
                                        <SelectItem value="house">Casa/Chalet</SelectItem>
                                        <SelectItem value="office">Oficina</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label>Precio Máximo</Label>
                                <Input type="number" placeholder="Ej: 1500" />
                            </div>

                            <div className="space-y-2">
                                <Label>Habitaciones (Min)</Label>
                                <Select defaultValue="any">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Cualquiera" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="any">Cualquiera</SelectItem>
                                        <SelectItem value="1">1+</SelectItem>
                                        <SelectItem value="2">2+</SelectItem>
                                        <SelectItem value="3">3+</SelectItem>
                                        <SelectItem value="4">4+</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <Button className="w-full">Aplicar Filtros</Button>
                        </div>
                    </div>

                    {/* Property Grid */}
                    <div className="lg:col-span-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {properties.map((property) => (
                                <PropertyCard key={property.id} {...property} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <footer className="bg-gray-950 text-gray-300 py-8 text-center text-sm">
                © 2026 Inmobiliaria GOTI. Todos los derechos reservados.
            </footer>
        </div>
    )
}
