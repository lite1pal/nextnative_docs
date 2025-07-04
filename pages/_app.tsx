import type { AppProps } from "next/app";

import dynamic from "next/dynamic";

const Analytics = dynamic(() => import("../components/analytics"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
