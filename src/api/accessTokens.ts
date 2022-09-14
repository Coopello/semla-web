import { axios } from "src/lib/axios";
import type { PostQiitaAccessToken } from "src/model/PostQiitaAccessToken";
import type { ResponseResultType } from "src/type";

/**
 * @package
 */
export const AccessTokens = async (
  request: PostQiitaAccessToken["request"]
): Promise<ResponseResultType<PostQiitaAccessToken["response"]>> => {
  const { client_id, client_secret, code } = request;
  try {
    const result = await axios.post<PostQiitaAccessToken["response"]>(
      "/api/v2/access_tokens",
      {
        client_id,
        client_secret,
        code,
      }
    );
    return {
      type: "SUCCESS",
      data: result.data,
    };
  } catch (error) {
    return {
      type: "FAILURE",
      error,
    };
  }
};
