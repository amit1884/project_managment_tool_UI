import React from "react";
import FixedLayout from "@/components/FixedLayout";
import '../app/globals.scss'
function MyApp({ Component, pageProps }) {
  return (
    <FixedLayout>
      <Component {...pageProps} />
    </FixedLayout>
  );
}

export default MyApp;
