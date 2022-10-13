import { axios } from "src/lib";
import type { PostQiita } from "src/model/PostQiita";
import type { ResponseResultType } from "src/type";

/**
 * @package
 */
export const ItemsPost = async (
  request: PostQiita["request"]
): Promise<ResponseResultType> => {
  try {
    const result = await axios.post(
      "/api/v2/items",
      {
        title: request.title,
        body: request.body,
        tags: request.tags,
        private: true,
      },
      {
        headers: {
          Authorization: `Bearer ${request.token}`,
        },
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
