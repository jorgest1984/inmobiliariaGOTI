
'use client'

import { login, signup } from '../actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Building2 } from 'lucide-react'
import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function LoginForm() {
    const [isLoading, setIsLoading] = useState(false)
    const searchParams = useSearchParams()
    const error = searchParams.get('error')

    return (
        <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
                <TabsTrigger value="register">Registro</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
                <Card>
                    <CardHeader>
                        <CardTitle>Bienvenido de nuevo</CardTitle>
                        <CardDescription>
                            Ingresa tus credenciales para acceder a tu cuenta.
                        </CardDescription>
                    </CardHeader>
                    <form onSubmit={() => setIsLoading(true)}>
                        <CardContent className="space-y-4">
                            {error && (
                                <div className="p-3 text-sm text-red-500 bg-red-50 border border-red-200 rounded-md">
                                    Error: {error}
                                </div>
                            )}
                            <div className="space-y-2">
                                <Label htmlFor="email">Correo Electrónico</Label>
                                <Input id="email" name="email" type="email" placeholder="tu@email.com" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Contraseña</Label>
                                <Input id="password" name="password" type="password" required />
                            </div>
                        </CardContent>
                        <CardFooter> {/* Re-added CardFooter to maintain structure */}
                            <Button formAction={login} type="submit" disabled={isLoading} className="w-full">
                                {isLoading ? 'Iniciando sesión...' : 'Entrar'}
                            </Button>
                        </CardFooter>
                    </form>
                </Card>
            </TabsContent>

            <TabsContent value="register">
                <Card>
                    <CardHeader>
                        <CardTitle>Crear Cuenta</CardTitle>
                        <CardDescription>
                            Regístrate si eres un nuevo inquilino o propietario.
                        </CardDescription>
                    </CardHeader>
                    <form>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="register-name">Nombre Completo</Label>
                                <Input id="register-name" name="full_name" placeholder="Juan Pérez" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="register-email">Correo Electrónico</Label>
                                <Input id="register-email" name="email" type="email" placeholder="nombre@ejemplo.com" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="register-password">Contraseña</Label>
                                <Input id="register-password" name="password" type="password" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="role">Soy...</Label>
                                <select id="role" name="role" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                    <option value="tenant">Inquilino</option>
                                    <option value="owner">Propietario</option>
                                </select>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button formAction={signup} className="w-full">Registrarse</Button>
                        </CardFooter>
                    </form>
                </Card>
            </TabsContent>
        </Tabs>
    )
}

export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
            <div className="w-full max-w-md">
                <div className="flex flex-col items-center mb-8">
                    <div className="bg-primary p-3 rounded-full mb-4">
                        <Building2 className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Inmobiliaria GOTI</h1>
                    <p className="text-gray-500 dark:text-gray-400">Gestiona tu hogar con facilidad</p>
                </div>
                <Suspense fallback={<div>Cargando...</div>}>
                    <LoginForm />
                </Suspense>
            </div>
        </div>
    )
}
