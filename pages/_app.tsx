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
        {/* タッチアイコンの設定 */}
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="apple-touch-icon-192x192.png"
        />
        {/* iOSのタッチアイコンのタイトルの設定 */}
        <meta
          name="apple-mobile-web-app-title"
          content="Coopemo - 「メモ感覚」で気楽に情報発信"
        />
        {/* windows8,10でスタート画面にピン留めした時の設定 */}
        <meta name="msapplication-square70x70logo" content="small.jpg" />
        <meta name="msapplication-square150x150logo" content="medium.jpg" />
        <meta name="msapplication-wide310x150logo" content="wide.jpg" />
        <meta name="msapplication-square310x310logo" content="large.jpg" />
        {/* OGPの共通設定 */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coopemo.com" />
        <meta
          property="og:title"
          content="Coopemo - 「メモ感覚」で気楽に情報発信"
        />
        <meta
          property="og:description"
          content="Coopemoは「メモ感覚」で情報発信ができるアプリです。テンプレートに従って学習内容を記載していくことで、他の人にも見てもらいやすい記事が簡単に作成できます。"
        />
        <meta property="og:image" content="絶対パスで記述" />
        {/* Twitterカードの設定 */}
        <meta name="twitter:card" content="summary_large_image" />
        {/* Android版Chromeでのタブの色の設定 */}
        <meta name="theme-color" content="#000" />
        {/* 基本設定 */}
        <link rel="icon" href="/favicon.ico" />
        <title>Coopemo - 「メモ感覚」で気楽に情報発信</title>
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
