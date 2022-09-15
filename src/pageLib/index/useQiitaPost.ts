import type { Reset } from "@mantine/form/lib/types";
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
        return;
      }

      const sendCreateQiitaPostResult = await sendCreateQiitaPostRequest({
        ...formContentsRow,
        token: getQiitaAccessTokenResult.token,
      });

      if (sendCreateQiitaPostResult === "SUCCESS") {
        reset();
        localStorage.removeItem("formContents");
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
