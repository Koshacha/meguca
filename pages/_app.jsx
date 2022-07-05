import Script from 'next/script';
import AppContext from '../context/AppContext';
import '../styles/globals.css';
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n';

function MyApp({ Component, pageProps }) {
  const { t } = useTranslation();
	const [query] = useLanguageQuery();

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
          locale: { 
            translate: t,
            lang: query
          },
        }}
      >
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  );
}

export default MyApp;
