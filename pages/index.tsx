/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useRouter } from 'next/router';
console.log("Index to support static generation")
function HomePage() {
  const router = useRouter();
  console.log("Homepage to support static generation")

  useEffect(() => {
    router.replace('/home'); // Redirect immediately
  }, [router]);

  return null; // No content to render
}

export default HomePage;
