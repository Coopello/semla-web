/* eslint-disable @typescript-eslint/naming-convention */
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

    return "FAILURE";
  };

  return { sendGetQiitaAccessTokenRequest };
};
