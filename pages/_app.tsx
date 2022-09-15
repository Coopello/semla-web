import "src/style/globals.css";

import { createEmotionCache, MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import type { CustomAppPage } from "next/app";
import Head from "next/head";

const appendCache = createEmotionCache({ key: "mantine", prepend: false });

const MyApp: CustomAppPage = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <title>Coopemo</title>
        <meta
          name="description"
          property="og:description"
          content="Coopemoは「メモ感覚」で情報発信ができるアプリです。テンプレートに従って学習内容を記載していくことで、他の人にも見てもらいやすい記事が作成できます。"
        />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        emotionCache={appendCache}
      >
        <NotificationsProvider position="top-right" limit={5}>
          {getLayout(<Component {...pageProps} />)}
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
};

export default MyApp;
