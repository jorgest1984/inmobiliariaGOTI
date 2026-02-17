
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { LayoutDashboard, Building, Users, AlertCircle, LogOut, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { signout } from '@/app/(auth)/actions'

const routes = [
    {
        label: 'Panel Principal',
        icon: LayoutDashboard,
        href: '/admin',
        color: 'text-sky-500',
    },
    {
        label: 'Propiedades',
        icon: Building,
        href: '/admin/properties',
        color: 'text-violet-500',
    },
    {
        label: 'Usuarios',
        icon: Users,
        href: '/admin/users',
        color: 'text-pink-700',
    },
    {
        label: 'Incidencias',
        icon: AlertCircle,
        href: '/admin/incidents',
        color: 'text-orange-700',
    },
    {
        label: 'Configuración',
        icon: Settings,
        href: '/admin/settings',
        color: 'text-gray-500',
    }
]

export function AdminSidebar() {
    const pathname = usePathname()

    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-slate-900 text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/admin" className="flex items-center pl-3 mb-14">
                    <h1 className="text-2xl font-bold">Inmobiliaria GOTI</h1>
                    <span className="ml-2 text-xs bg-primary px-1 rounded text-primary-foreground">Admin</span>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
                            )}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="px-3 py-2">
                <form action={signout}>
                    <Button variant="ghost" className="w-full justify-start text-zinc-400 hover:text-white hover:bg-white/10">
                        <LogOut className="h-5 w-5 mr-3" />
                        Cerrar Sesión
                    </Button>
                </form>
            </div>
        </div>
    )
}
