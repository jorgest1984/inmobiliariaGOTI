
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function AdminSettings() {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Configuración</h2>
                <p className="text-muted-foreground">Ajustes generales de la aplicación y la agencia.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Información de la Agencia</CardTitle>
                    <CardDescription>Datos visibles en facturas y comunicaciones.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Nombre Comercial</Label>
                            <Input id="name" defaultValue="Inmobiliaria GOTI" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="cif">CIF / NIF</Label>
                            <Input id="cif" defaultValue="B-12345678" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email de Contacto</Label>
                            <Input id="email" defaultValue="info@inmobiliariagoti.com" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Teléfono</Label>
                            <Input id="phone" defaultValue="+34 912 345 678" />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Button>Guardar Cambios</Button>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Comisiones y Tarifas</CardTitle>
                    <CardDescription>Configuración de porcentajes por defecto.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="commission">Comisión Alquiler (%)</Label>
                            <Input id="commission" type="number" defaultValue="5" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="vat">IVA (%)</Label>
                            <Input id="vat" type="number" defaultValue="21" />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Button variant="outline">Actualizar Tarifas</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
