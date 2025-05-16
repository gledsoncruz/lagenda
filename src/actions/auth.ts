'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {

  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)
  let errorHandling: string = '';

  if (error) {
    console.log(error.code);
    if (error.code === 'invalid_credentials') {
      errorHandling = 'Login ou senha inválidos.'
    } else {
      errorHandling = 'Ocorreu um erro ao fazer login.'
    }
    return {
      ok: false,
      error: errorHandling,
      data: null
    }
  }
  return {
    ok: true,
    error: '',
    data: null
  }
  // revalidatePath('/', 'layout')
  // redirect('/')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}


export async function logout() {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs

  const { error } = await supabase.auth.signOut()

  if (error) {
    redirect('/error')
  }

  revalidatePath('/login', 'layout')
  redirect('/login')
}


export async function getUserLogged() {
  const supabase = await createClient()

  const { data: { user }, error } = await supabase.auth.getUser()

  if (error) {
    console.log(error);
  }

  return user;
}

