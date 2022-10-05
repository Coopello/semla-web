import type { Reset } from "@mantine/form/lib/types";
import { showNotification } from "@mantine/notifications";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { createQiitaPost, getQiitaAccessToken } from "src/lib";
import type { PostContentsForm } from "src/type";

/**
 * @package
 */
export const useQiitaPost = (
  reset: Reset,
  handleSetFormContentsFormLocalStorage: () => Omit<
    PostContentsForm,
    "token"
  > | null
) => {
  const router = useRouter();
  const { code, state } = router.query;
  const { sendGetQiitaAccessTokenRequest } = getQiitaAccessToken();
  const { sendCreateQiitaPostRequest } = createQiitaPost();

  useEffect(() => {
    if (
      typeof code !== "string" ||
      state !== process.env.NEXT_PUBLIC_QIITA_REDIRECT_STATE
    ) {
      return;
    }

    const formContentsRow = handleSetFormContentsFormLocalStorage();
    if (!formContentsRow) return;
    (async () => {
      const getQiitaAccessTokenResult = await sendGetQiitaAccessTokenRequest({
        code,
      });
      if (
        !getQiitaAccessTokenResult ||
        getQiitaAccessTokenResult === "FAILURE"
      ) {
        showNotification({
          color: "red",
          title: "投稿失敗",
          message: "認証に失敗しました。もう一度お試しください。",
        });

        return;
      }

      const sendCreateQiitaPostResult = await sendCreateQiitaPostRequest({
        ...formContentsRow,
        token: getQiitaAccessTokenResult.token,
      });

      if (sendCreateQiitaPostResult === "SUCCESS") {
        showNotification({
          color: "green",
          title: "投稿完了",
          message: "Qiitaに投稿しました！",
        });

        reset();
        localStorage.removeItem("formContents");

        return;
      }

      showNotification({
        color: "red",
        title: "投稿失敗",
        message: "Qiitaに投稿できませんでした。",
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, state]);
};
