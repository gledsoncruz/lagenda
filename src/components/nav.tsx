import { PawPrint } from "lucide-react";
import Link from "next/link";

export default function NavHeader() {
  return (
    <nav className="w-full flex flex-row items-center justify-between h-16 px-5 font-medium bg-slate-900 text-gray-300 shadow-md shadow-gray-400">
      <Link href="/" className="text-2xl flex flex-row items-center justify-center gap-4">
        <PawPrint />
        <span className="hover:tracking-widest duration-300"><b>GC</b> SISTEMAS</span>
      </Link>
    </nav>
  )
}