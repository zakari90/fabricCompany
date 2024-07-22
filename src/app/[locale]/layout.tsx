import Footer from '@/components/footer';
import Header from '@/components/header';
import { rubik } from '@/lib/fonts';
import { cn } from "@/lib/utils";
import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { Inter as FontSans } from "next/font/google";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './globals.css';
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const metadata: Metadata = {
  title: 'Fabric company',
  description: 'website for a fabric company',
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {

  const font = locale === 'ar' ? rubik.className :  fontSans.variable;
  const documentDirection = locale === 'ar' ? "rtl" :  "ltr";

  const Navigation = useTranslations('navigation');
  const navLinks:[string, string][] = [
    [Navigation('home'), 'home'],
    [Navigation('services'), 'services'],
    [Navigation('pr'), 'products'],
    [Navigation('about'), 'about'],
    [Navigation('contact'), 'contact']
  ];

  return (
    <html lang={locale} dir={documentDirection}>
      <body 
      className={cn(
        "min-h-screen w-full font-sans antialiased",
        font )}>
        <Header locale={locale} navLinks= {navLinks}  />
          <div className='flex-grow'>{children}</div>
        <Footer locale={locale} navLinks= {navLinks} />
      </body>
    </html>
  );
}
