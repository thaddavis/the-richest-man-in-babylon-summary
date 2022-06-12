// import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

// import previewImage from "../public/George_S_Clason.png";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        {/* <meta property="og:image" content={previewImage} key="ogimage" /> */}
        <meta
          property="og:site_name"
          content={"CMD - The Richest Man In Babylon"}
          key="ogsitename"
        />
        <meta
          property="og:title"
          content={"CMD - The Richest Man In Babylon"}
          key="ogtitle"
        />
        <meta
          property="og:description"
          content={
            "'The Richest Man In Babylon' by George S. Clason is a short book of 10 fables where each fable teaches a different aspect of money fundamentals. Here is a summary of the takeaway points from the book."
          }
          key="ogdesc"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
