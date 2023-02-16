import './globals.css';
import { Jost } from '@next/font/google';
import NavBar from '@/components/NavBar';
import { SessionProvider } from "next-auth/react"


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
      <SessionProvider>

      <body className="body_">
        <NavBar />
        {children}
      </SessionProvider>
      </body>
    </html>
  );
}
