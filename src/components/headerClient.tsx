// components/HeaderClient.tsx
"use client";

import { LogOut, Lock, CalendarCheck } from "lucide-react";
import Link from "next/link";
import { logout } from "@/actions/auth";
import { User as userLogged } from "@supabase/supabase-js";

export function HeaderClient({ initialUser }: { initialUser: userLogged | null }) {
  return (
    <nav className="w-full flex flex-row items-center justify-between h-16 px-5 font-medium bg-slate-900 text-gray-300 shadow-md shadow-gray-400">
      <Link href="/" className="text-2xl flex flex-row items-center justify-center gap-4">
        <CalendarCheck />
        <span className="hover:tracking-widest duration-300">LAGENDA</span>
      </Link>

      <div className="hidden md:flex md:flex-row md:gap-6 pr-5 items-center">
        {initialUser ? (
          <>

            <Link href="/dashboard" className="text-white hover:text-gray-300">DASHBOARD</Link>
            <Link href="/companies" className="text-white hover:text-gray-300">EMPRESAS</Link>
            <Link href="/appointments" className="text-white hover:text-gray-300">AGENDAMENTOS</Link>
            <Link href="/services" className="text-white hover:text-gray-300">SERVIÇOS</Link>
            <Link href="/customers" className="text-white hover:text-gray-300">CLIENTES</Link>

            <button onClick={logout} className="text-white hover:text-gray-300 cursor-pointer">
              <LogOut color="#fb3030" size={18} />
            </button>
          </>
        ) : (
          <Link href="/login" className="text-white hover:text-gray-300">
            <Lock color="#ffffff" />
          </Link>
        )}
      </div>
    </nav>
  );
}