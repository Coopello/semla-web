/* eslint-disable @typescript-eslint/naming-convention */
import { showNotification } from "@mantine/notifications";
import { AccessTokens } from "src/api";

/**
 * @package
 */
export const getQiitaAccessToken = () => {
  const sendGetQiitaAccessTokenRequest = async (request: { code: string }) => {
    const result = await AccessTokens({
      client_id: process.env.NEXT_PUBLIC_CLIENT_ID || "",
      client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET || "",
      code: request.code,
    });

    if (result.type === "SUCCESS") {
      return result.data;
    }

    showNotification({
      color: "red",
      title: "投稿失敗",
      message: "認証に失敗しました。もう一度お試しください。",
    });

    return "FAILURE";
  };

  return { sendGetQiitaAccessTokenRequest };
};
