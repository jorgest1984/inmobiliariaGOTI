
import Image from 'next/image'
import Link from 'next/link'
import { Bed, Bath, Square, MapPin } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface PropertyCardProps {
    id: string
    title: string
    address: string
    price: number
    image: string
    beds: number
    baths: number
    sqft: number
    type: 'rent' | 'sale'
}

export function PropertyCard({
    id,
    title,
    address,
    price,
    image,
    beds,
    baths,
    sqft,
    type,
}: PropertyCardProps) {
    return (
        <Link href={`/properties/${id}`}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative aspect-video">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                    <Badge className="absolute top-2 right-2 bg-primary/90 hover:bg-primary">
                        {type === 'rent' ? 'Alquiler' : 'Venta'}
                    </Badge>
                </div>
                <CardHeader className="p-4">
                    <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
                    <div className="flex items-center text-muted-foreground text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="line-clamp-1">{address}</span>
                    </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <div className="flex items-center">
                            <Bed className="h-4 w-4 mr-1" />
                            {beds} <span className="sr-only">Habs</span>
                        </div>
                        <div className="flex items-center">
                            <Bath className="h-4 w-4 mr-1" />
                            {baths} <span className="sr-only">Baños</span>
                        </div>
                        <div className="flex items-center">
                            <Square className="h-4 w-4 mr-1" />
                            {sqft} m²
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between items-center">
                    <div className="font-bold text-lg text-primary">
                        {new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(price)}
                        {type === 'rent' && <span className="text-sm font-normal text-muted-foreground">/mes</span>}
                    </div>
                </CardFooter>
            </Card>
        </Link>
    )
}
