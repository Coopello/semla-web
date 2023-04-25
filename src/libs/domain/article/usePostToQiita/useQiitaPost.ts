import type { Reset } from "@mantine/form/lib/types";
import { showNotification } from "@mantine/notifications";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { createQiitaPost } from "src/libs/domain/article/createQiitaPost";
import { getQiitaAccessToken } from "src/libs/domain/article/getQiitaAccessToken";
import { getQiitaRedirectUrl } from "src/libs/domain/article/getQiitaRedirectUrl";
import { saveFormContentsToLocalStorage } from "src/libs/domain/article/saveFormContentsToLocalStorage";
import type { PostContentsForm } from "src/models/article";

/**
 * @package
 */
export const useQiitaPost = (
  close: () => void,
  formComponents: {
    handleSetFormContentsFormLocalStorage: () => Omit<
      PostContentsForm,
      "token"
    > | null;
    reset: Reset;
    values: Omit<PostContentsForm, "token">;
  }
) => {
  const router = useRouter();
  const { handleSetFormContentsFormLocalStorage, reset, values } =
    formComponents;
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
      const { data: getQiitaAccessTokenData, error: getQiitaAccessTokenError } =
        await sendGetQiitaAccessTokenRequest({
          code,
        });
      if (!!getQiitaAccessTokenError || !getQiitaAccessTokenData) {
        showNotification({
          color: "red",
          title: "投稿失敗",
          message: "認証に失敗しました。もう一度お試しください。",
        });

        return;
      }

      const { data: createQiitaPostData, error: createQiitaPostError } =
        await sendCreateQiitaPostRequest({
          ...formContentsRow,
          token: getQiitaAccessTokenData.token,
        });

      if (!!createQiitaPostError || !createQiitaPostData) {
        showNotification({
          color: "green",
          title: "投稿完了",
          message: "Qiitaに投稿しました！",
        });

        reset();
        localStorage.removeItem("formContents");
      } else {
        showNotification({
          color: "red",
          title: "投稿失敗",
          message: "Qiitaに投稿できませんでした。",
        });
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, state]);

  const onSubmit = () => {
    saveFormContentsToLocalStorage(values);
    const redirectUrl = getQiitaRedirectUrl();
    router.push(redirectUrl);
    close();
  };

  return {
    onSubmit,
  };
};
