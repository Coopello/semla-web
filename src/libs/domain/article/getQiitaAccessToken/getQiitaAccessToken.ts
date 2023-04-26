/* eslint-disable @typescript-eslint/naming-convention */
import { getAccessTokens } from "src/apis/getAccessTokens";

/**
 * @package
 */
export const getQiitaAccessToken = () => {
  const sendGetQiitaAccessTokenRequest = async (request: { code: string }) => {
    const { data, error } = await getAccessTokens({
      client_id: process.env.NEXT_PUBLIC_CLIENT_ID || "",
      client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET || "",
      code: request.code,
    });

    return {
      data,
      error,
    };
  };

  return { sendGetQiitaAccessTokenRequest };
};
