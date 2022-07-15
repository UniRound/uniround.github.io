import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="w-full font-theme bg-primary text-light">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
