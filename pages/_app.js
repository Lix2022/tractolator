// pages/_app.js
import React, { useState, useEffect } from 'react';
import LoadingOverlay from '../components/loadingoverlay';
import Footer from '../components/footer';
import '../styles/globals.css';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (remove this in your actual code)
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clean up the timeout to prevent memory leaks
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {isLoading && <LoadingOverlay />} {/* Show the loading overlay if isLoading is true */}
      <NextNProgress
        color="#647a12"
        startPosition={0.5}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
      />

      
        
        <Component {...pageProps} />
      </div>

     
  );
}

export default MyApp;
