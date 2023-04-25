import { isAxiosError } from "axios";
import type { CreateArticle } from "src/apis/createArticle/types";
import { axios } from "src/lib/apiClient/axios";
import type { ApiResponse } from "src/types";

/**
 * @package
 */
export const createArticle = async (
  request: CreateArticle["request"]
): Promise<ApiResponse<CreateArticle["response"]>> => {
  try {
    const result = await axios.post<CreateArticle["response"]>(
      "/api/v2/items",
      {
        title: request.title,
        body: request.body,
        tags: request.tags,
        private: request.private,
      },
      {
        headers: {
          Authorization: `Bearer ${request.token}`,
        },
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
