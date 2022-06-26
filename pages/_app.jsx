import Script from 'next/script';
import AppContext from '../context/AppContext';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import locales from '../locales';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const lang = locales[router.locale];
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
      <AppContext.Provider
        value={{
          locale: { lang },
        }}
      >
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  );
}

export default MyApp;
