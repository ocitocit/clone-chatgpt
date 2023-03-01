'use client';

import { Toaster } from 'react-hot-toast';

export default function ClientProvider() {
  return (
    <>
      <Toaster
        containerStyle={{
          position: 'absolute',
          left: '50%',
          top: '70%',
          transform: 'translate(-50%, -50%)'
        }}
      />
    </>
  );
}
