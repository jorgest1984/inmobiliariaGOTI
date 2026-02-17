
import { SiteHeader } from '@/components/site-header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1 container py-12">
                <div className="max-w-5xl mx-auto space-y-12">

                    <div className="text-center space-y-4">
                        <h1 className="text-4xl font-bold tracking-tight">Contacta con Nosotros</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Estamos aquí para ayudarte. Envíanos un mensaje, llámanos o visítanos en nuestra oficina.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Información de Contacto</CardTitle>
                                    <CardDescription>Vías directas de comunicación.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <MapPin className="h-6 w-6 text-primary mt-1" />
                                        <div>
                                            <h3 className="font-semibold">Nuestra Oficina</h3>
                                            <p className="text-muted-foreground">Calle Gran Vía 12, Planta 4<br />28013 Madrid, España</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <Phone className="h-6 w-6 text-primary" />
                                        <div>
                                            <h3 className="font-semibold">Teléfono</h3>
                                            <p className="text-muted-foreground">+34 912 345 678</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <Mail className="h-6 w-6 text-primary" />
                                        <div>
                                            <h3 className="font-semibold">Email</h3>
                                            <p className="text-muted-foreground">info@inmobiliariagoti.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <Clock className="h-6 w-6 text-primary mt-1" />
                                        <div>
                                            <h3 className="font-semibold">Horario</h3>
                                            <p className="text-muted-foreground">Lunes - Viernes: 09:00 - 20:00<br />Sábados: 10:00 - 14:00</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="h-64 bg-muted rounded-lg border flex items-center justify-center relative overflow-hidden">
                                {/* Placeholder for map */}
                                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center" />
                                <p className="text-muted-foreground font-semibold relative z-10">Mapa de Ubicación (Google Maps)</p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Envíanos un Mensaje</CardTitle>
                                <CardDescription>Te responderemos en menos de 24 horas.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName">Nombre</Label>
                                            <Input id="firstName" placeholder="Tu nombre" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">Apellidos</Label>
                                            <Input id="lastName" placeholder="Tus apellidos" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="nombre@ejemplo.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Teléfono (Opcional)</Label>
                                        <Input id="phone" type="tel" placeholder="+34 600 000 000" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Asunto</Label>
                                        <Select defaultValue="info">
                                            <SelectTrigger>
                                                <SelectValue placeholder="Selecciona un asunto" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="info">Información General</SelectItem>
                                                <SelectItem value="visit">Solicitar Visita</SelectItem>
                                                <SelectItem value="owner">Soy Propietario</SelectItem>
                                                <SelectItem value="support">Soporte Inquilino</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Mensaje</Label>
                                        <Textarea id="message" placeholder="¿En qué podemos ayudarte?" className="min-h-[150px]" />
                                    </div>
                                    <Button type="submit" className="w-full">Enviar Mensaje</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
            <footer className="bg-gray-950 text-gray-300 py-8 text-center text-sm">
                © 2026 Inmobiliaria GOTI. Todos los derechos reservados.
            </footer>
        </div>
    )
}


