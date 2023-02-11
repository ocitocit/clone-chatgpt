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
      <body className="m-0 flex flex-col border-2 border-solid border-black font-jost md:h-screen md:w-screen md:flex-row md:border-none">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
