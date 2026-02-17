
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { PropertyCard } from '@/components/properties/property-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

export default function Home() {
  const featuredProperties = [
    {
      id: 1,
      title: "Apartamento de Lujo en el Centro",
      type: "rent" as const,
      price: 1200,
      address: "Calle Gran Vía 12, Madrid",
      beds: 2,
      baths: 2,
      sqft: 95,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Chalet Familiar con Jardín",
      type: "sale" as const,
      price: 450000,
      address: "Av. de la Paz 45, Pozuelo",
      beds: 4,
      baths: 3,
      sqft: 250,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Loft Moderno en Zona Artística",
      type: "rent" as const,
      price: 950,
      address: "Calle Pez 8, Madrid",
      beds: 1,
      baths: 1,
      sqft: 60,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080&auto=format&fit=crop",
    }
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
          {/* Abstract Background */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-900 via-purple-900 to-gray-900 opacity-90" />
          <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />

          <div className="relative z-10 container flex flex-col items-center text-center space-y-6 px-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Encuentra tu hogar ideal <br className="hidden md:inline" /> con Inmobiliaria GOTI
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-[800px]">
              Expertos en gestión inmobiliaria. Alquiler, venta y administración de propiedades con la confianza que mereces.
            </p>

            <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md p-4 rounded-lg flex flex-col md:flex-row gap-4 mt-8">
              <Input
                placeholder="Ubicación, tipo de propiedad..."
                className="bg-white text-gray-900 border-0 placeholder:text-gray-500 h-12"
              />
              <Button size="lg" className="h-12 w-full md:w-auto px-8">
                <Search className="mr-2 h-4 w-4" /> Buscar
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Properties Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Propiedades Destacadas
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Descubre nuestra selección exclusiva de viviendas en venta y alquiler.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProperties.map((property) => (
                <PropertyCard key={property.id} {...property} id={property.id.toString()} />
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <Link href="/properties">
                <Button variant="outline" size="lg">Ver todas las propiedades</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Cta Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Eres propietario?</h2>
            <p className="text-xl mb-8 opacity-90">Confíanos la gestión de tu inmueble y olvídate de preocupaciones.</p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">Contactar con Agente</Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-300 py-12">
        <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-xl text-white">Inmobiliaria GOTI</span>
            </div>
            <p className="text-sm">
              Tu agencia de confianza. Gestión integral de alquileres y ventas.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Propiedades</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/properties?type=rent" className="hover:text-white">Alquiler</Link></li>
              <li><Link href="/properties?type=sale" className="hover:text-white">Venta</Link></li>
              <li><Link href="/properties?type=new" className="hover:text-white">Obra Nueva</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">Sobre Nosotros</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contacto</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacidad</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li>Calle Principal 123</li>
              <li>Madrid, España</li>
              <li>info@goti.com</li>
              <li>+34 912 345 678</li>
            </ul>
          </div>
        </div>
        <div className="container mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          © 2026 Inmobiliaria GOTI. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}
