// MyApp.js
import Head from "next/head";
import { useEffect, useState } from "react";
import AOS from "aos";
import { Analytics } from "@vercel/analytics/react";
import Preloader from "../components/preLoader"; 

import "aos/dist/aos.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const fetchData = async () => {
    

      setTimeout(() => {
        setLoading(false);
      }, 3500); 
    };

    fetchData();

    AOS.init({
      once: true,
      offset: 50,
      duration: 700,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Mehul - Home</title>
      </Head>

      {loading ? (
        <div>
          <Preloader></Preloader>
        </div>
      ) : (
        <>
          <Component {...pageProps} />
          <Analytics />
        </>
      )}
    </>
  );
}

export default MyApp;
