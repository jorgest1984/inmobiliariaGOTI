
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, Edit, Trash2, MoreHorizontal, Filter } from 'lucide-react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'

export default function AdminProperties() {
    const properties = [
        { id: 'PROP-001', address: 'Calle Gran Vía 12', type: 'Alquiler', price: 1200, status: 'rented', owner: 'Juan Pérez', tenant: 'María López' },
        { id: 'PROP-002', address: 'Av. de la Paz 45', type: 'Venta', price: 450000, status: 'available', owner: 'Carlos Ruiz', tenant: '-' },
        { id: 'PROP-003', address: 'Calle Pez 8', type: 'Alquiler', price: 950, status: 'available', owner: 'Ana García', tenant: '-' },
        { id: 'PROP-004', address: 'Paseo Castellana 200', type: 'Alquiler', price: 1800, status: 'maintenance', owner: 'Luis Torres', tenant: '-' },
    ]

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Gestión de Propiedades</h2>
                    <p className="text-muted-foreground">Administra el inventario de inmuebles.</p>
                </div>
                <Button>
                    <Plus className="mr-2 h-4 w-4" /> Nueva Propiedad
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                        <CardTitle>Listado de Inmuebles</CardTitle>
                        <div className="flex gap-2">
                            <Input placeholder="Buscar por dirección..." className="w-[250px]" />
                            <Button variant="outline" size="icon">
                                <Filter className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Dirección</TableHead>
                                <TableHead>Tipo</TableHead>
                                <TableHead>Precio</TableHead>
                                <TableHead>Estado</TableHead>
                                <TableHead>Propietario</TableHead>
                                <TableHead>Inquilino</TableHead>
                                <TableHead className="text-right">Acciones</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {properties.map((property) => (
                                <TableRow key={property.id}>
                                    <TableCell className="font-medium">{property.address}</TableCell>
                                    <TableCell>{property.type}</TableCell>
                                    <TableCell>{property.price} €</TableCell>
                                    <TableCell>
                                        <Badge variant={
                                            property.status === 'available' ? 'default' :
                                                property.status === 'rented' ? 'secondary' : 'outline'
                                        }>
                                            {property.status === 'available' ? 'Disponible' :
                                                property.status === 'rented' ? 'Alquilado' : 'Mantenimiento'}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{property.owner}</TableCell>
                                    <TableCell>{property.tenant}</TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" className="h-8 w-8 p-0">
                                                    <span className="sr-only">Abrir menú</span>
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                                                <DropdownMenuItem>
                                                    <Edit className="mr-2 h-4 w-4" /> Editar
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem className="text-red-600">
                                                    <Trash2 className="mr-2 h-4 w-4" /> Eliminar
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
