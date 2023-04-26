import { isAxiosError } from "axios";
import type { GetAccessTokens } from "src/apis/getAccessTokens/types";
import { axios } from "src/libs/api/api-client";
import type { ApiResponse } from "src/types";

/**
 * @package
 */
export const getAccessTokens = async (
  request: GetAccessTokens["request"]
): Promise<ApiResponse<GetAccessTokens["response"]>> => {
  const { client_id, client_secret, code } = request;
  try {
    const result = await axios.post<GetAccessTokens["response"]>(
      "/api/v2/access_tokens",
      {
        client_id,
        client_secret,
        code,
      }
    );

    return {
      data: result.data,
      error: null,
    };
  } catch (e) {
    if (
      isAxiosError(e) &&
      e.response &&
      e.response.data &&
      "error" in e.response.data
    ) {
      return {
        data: undefined,
        error: e.response.data.error as string,
      };
    }

    return {
      data: undefined,
      error: "エラーが発生しました",
    };
  }
};
