import "src/style/globals.css";

import { createEmotionCache, MantineProvider } from "@mantine/core";
import type { CustomAppPage } from "next/app";
import Head from "next/head";

const appendCache = createEmotionCache({ key: "mantine", prepend: false });

const MyApp: CustomAppPage = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <title>Semla</title>
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        emotionCache={appendCache}
      >
        {getLayout(<Component {...pageProps} />)}
      </MantineProvider>
    </>
  );
};

export default MyApp;
