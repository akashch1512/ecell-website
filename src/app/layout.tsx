import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk, Inter} from 'next/font/google';
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: " ECELL JNEC",
  description: "ECELL JNEC",
};

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap', 
  adjustFontFallback: false
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={grotesk.className}>
      <div
  className="flex flex-col overflow-auto px-6 py-8 sm:px-14 sm:py-16 lg:px-28 bg-cover bg-center min-h-screen"
  style={{
    backgroundImage: "url('https://wallpaperaccess.com/full/417954.jpg')",
  }}
>



          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
