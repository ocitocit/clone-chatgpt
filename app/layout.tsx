import './globals.css';
import { Jost } from '@next/font/google';
import NavBar from '@/components/NavBar';

const jost = Jost({
  variable: '--font-jost'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={jost.variable} lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="m-0 flex h-screen w-screen flex-col overflow-hidden border-2 border-solid border-black font-jost md:flex-row md:border-none">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
