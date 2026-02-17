
'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'
import { headers } from 'next/headers'

export async function login(formData: FormData) {
    // Check for environment variables
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    // Type-casting here for simplicity, in a real app use Zod for validation
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    // DEMO MODE: If no credentials, simulate login
    if (!supabaseUrl || !supabaseKey) {
        console.warn("Supabase credentials missing. Utilizing DEMO login.")
        // Simulate a delay
        await new Promise(resolve => setTimeout(resolve, 1000))

        // Redirect based on email (convention for demo)
        if (email.includes('admin')) {
            redirect('/admin')
        } else if (email.includes('owner')) {
            redirect('/owner')
        } else {
            redirect('/tenant')
        }
    }

    const supabase = await createClient()

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) {
        return redirect('/login?error=Could not authenticate user')
    }

    revalidatePath('/', 'layout')

    // Redirect based on email/role if possible, otherwise default
    if (email.includes('admin')) {
        redirect('/admin')
    } else if (email.includes('owner')) {
        redirect('/owner')
    } else {
        redirect('/tenant')
    }
}

export async function signup(formData: FormData) {
    // Check for environment variables
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    // Type-casting here for simplicity, in a real app use Zod for validation
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const fullName = formData.get('full_name') as string
    const role = formData.get('role') as string

    // DEMO MODE: If no credentials, simulate signup
    if (!supabaseUrl || !supabaseKey) {
        console.warn("Supabase credentials missing. Utilizing DEMO signup.")
        await new Promise(resolve => setTimeout(resolve, 1000))
        if (role === 'owner') {
            redirect('/owner')
        } else {
            redirect('/tenant')
        }
    }

    const supabase = await createClient()

    const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                full_name: fullName,
                role: role,
            }
        }
    })

    if (error) {
        return redirect('/login?error=Could not create user')
    }

    revalidatePath('/', 'layout')

    if (role === 'owner') {
        redirect('/owner')
    } else {
        redirect('/tenant')
    }
}

export async function signout() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (supabaseUrl && supabaseKey) {
        const supabase = await createClient()
        await supabase.auth.signOut()
    }

    revalidatePath('/', 'layout')
    redirect('/login')
}
