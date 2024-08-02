/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/home'); // Redirect immediately
  }, [router]);

  return null; // No content to render
}

export default HomePage;
