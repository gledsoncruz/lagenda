import heroImg from "@/assets/hero.png"
import Image from "next/image";


export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div className="py-16">
      <div className="flex justify-center h-[500px] bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div className="h-32">
          <Image priority src={heroImg} alt="Secretária agendando serviço" width={400} className="hidden lg:block pt-20" />
        </div>
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">LAGENDA</h2>
          {children}
        </div>
      </div>
    </div>


  );
}
