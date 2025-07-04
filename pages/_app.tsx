import { Analytics } from "@vercel/analytics/next";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
