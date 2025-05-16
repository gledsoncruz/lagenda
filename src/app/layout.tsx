import type { Metadata } from "next";
import "./globals.css";
import { font_body } from "./fonts";
import { Header } from "@/components/header";
import { ToastContainer } from "react-toastify"

export const metadata: Metadata = {
  title: "Lagendapp",
  description: "Agendamento de serviços para seu negócio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font_body.className} bg-gray-300`}>
        <ToastContainer autoClose={5000} />
        <Header />
        <div className="w-full mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
