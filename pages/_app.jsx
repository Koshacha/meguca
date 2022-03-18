import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-ZEGKCG1L3R"
        strategy="afterInteractive"
      ></Script>
      <Script id="googletagmanager">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZEGKCG1L3R');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
