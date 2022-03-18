import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://fonts.googleapis.com/css?family=Nunito&display=swap"
            media="all"
          />
          <meta name='freelancehunt' content='f25b7c1b02432c5' />
        </Head>
        <body className="bg-white dark:bg-neutral-900">
          <Main />
          <NextScript />
          <script
            src="https://code.tidio.co/lz968h3xmk1jc9ypufwnvfmejiivmj2q.js"
            async
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
