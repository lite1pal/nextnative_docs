import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
