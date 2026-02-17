
import { OwnerSidebar } from '@/components/dashboard/owner-sidebar'

// Reuse sidebar for now, but in real app would have role-based links
export default function OwnerLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
                <OwnerSidebar />
            </div>
            <main className="md:pl-72">
                <div className="px-4 py-8 md:px-8">
                    {children}
                </div>
            </main>
        </div>
    )
}
