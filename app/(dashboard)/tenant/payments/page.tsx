
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'
import { CreditCard, Wallet, Building2, CheckCircle2 } from 'lucide-react'

export default function PaymentsPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [step, setStep] = useState<'review' | 'success'>('review')

    const handlePayment = async () => {
        setLoading(true)
        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 2000))
        setLoading(false)
        setStep('success')
    }

    if (step === 'success') {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="bg-green-100 p-6 rounded-full">
                    <CheckCircle2 className="h-16 w-16 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold">¡Pago Realizado con Éxito!</h2>
                <p className="text-muted-foreground max-w-md">
                    Hemos procesado tu pago correctamente. Recibirás el comprobante en tu correo electrónico en breve.
                </p>
                <div className="flex gap-4">
                    <Button variant="outline" onClick={() => router.push('/tenant/receipts')}>
                        Volver a Recibos
                    </Button>
                    <Button onClick={() => router.push('/tenant/dashboard')}>
                        Ir al Inicio
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Pasarela de Pago</h2>
                <p className="text-muted-foreground">Completa el pago de tus recibos pendientes.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
                <div className="md:col-span-2 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Método de Pago</CardTitle>
                            <CardDescription>Selecciona cómo quieres pagar.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <RadioGroup defaultValue="card" className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <RadioGroupItem value="card" id="card" className="peer sr-only" />
                                    <Label
                                        htmlFor="card"
                                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                    >
                                        <CreditCard className="mb-3 h-6 w-6" />
                                        Tarjeta
                                    </Label>
                                </div>
                                <div>
                                    <RadioGroupItem value="transfer" id="transfer" className="peer sr-only" />
                                    <Label
                                        htmlFor="transfer"
                                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                    >
                                        <Building2 className="mb-3 h-6 w-6" />
                                        Transferencia
                                    </Label>
                                </div>
                                <div>
                                    <RadioGroupItem value="bizum" id="bizum" className="peer sr-only" />
                                    <Label
                                        htmlFor="bizum"
                                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                    >
                                        <Wallet className="mb-3 h-6 w-6" />
                                        Bizum
                                    </Label>
                                </div>
                            </RadioGroup>

                            <div className="mt-6 space-y-4">
                                <div className="space-y-2">
                                    <Label>Nombre del Titular</Label>
                                    <Input placeholder="Como aparece en la tarjeta" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Número de Tarjeta</Label>
                                    <Input placeholder="0000 0000 0000 0000" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Fecha Expiración</Label>
                                        <Input placeholder="MM/YY" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>CVC</Label>
                                        <Input placeholder="123" />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="md:col-span-1">
                    <Card className="sticky top-4">
                        <CardHeader>
                            <CardTitle>Resumen</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between text-sm">
                                <span>Recibo Alquiler Feb '26</span>
                                <span>1.200,00 €</span>
                            </div>
                            <div className="flex justify-between text-sm text-muted-foreground">
                                <span>Gastos de gestión</span>
                                <span>0,00 €</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between font-bold text-lg">
                                <span>Total a Pagar</span>
                                <span>1.200,00 €</span>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full size-lg" onClick={handlePayment} disabled={loading}>
                                {loading ? 'Procesando...' : 'Pagar 1.200,00 €'}
                            </Button>
                        </CardFooter>
                    </Card>
                    <p className="text-xs text-center text-muted-foreground mt-4">
                        Pagos seguros encriptados con SSL de 256-bits.
                    </p>
                </div>
            </div>
        </div>
    )
}
