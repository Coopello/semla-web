/* eslint-disable @typescript-eslint/naming-convention */
import { AccessTokens } from "src/api";
import { CLIENT_ID, CLIENT_SECRET } from "src/config";

/**
 * @package
 */
export const getQiitaAccessToken = () => {
  const sendGetQiitaAccessTokenRequest = async (request: { code: string }) => {
    const result = await AccessTokens({
      client_id: CLIENT_ID || "",
      client_secret: CLIENT_SECRET || "",
      code: request.code,
    });

    if (result.type === "SUCCESS") {
      return result.data;
    }

    return "FAILURE";
  };

  return { sendGetQiitaAccessTokenRequest };
};
