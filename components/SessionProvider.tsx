'use client';

import { Session } from 'next-auth';
import { SessionProvider as Provider } from 'next-auth/react';

type Props = {
  childern: React.ReactNode;
  session: Session | null;
};

export function SessionProvider({ childern, session }: Props) {
  return <Provider>{childern}</Provider>;
}
