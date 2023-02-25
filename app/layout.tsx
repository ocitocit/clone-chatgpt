import './globals.css';
import { Jost } from '@next/font/google';
import NavBar from '@/components/NavBar';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Login from '@/components/Login';
import { SessionProvider } from '@/components/SessionProvider';

const jost = Jost({
  variable: '--font-jost'
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`${jost.variable} body_`}>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <>
              <NavBar /> {children}
            </>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
