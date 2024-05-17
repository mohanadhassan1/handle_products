"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function withAuth(Component: React.ComponentType<any>) {
  const WithAuth: React.FC<any> = (props) => {
    const router = useRouter();

    useEffect(() => {
      const session = localStorage.getItem('userData');
      if (!session) {
        router.push('/login');
      }
    }, []);

    return <Component {...props} />;
  };

  return WithAuth;
}