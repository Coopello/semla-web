import { axios } from "src/lib/axios";
import type { PostQiita } from "src/model/postQiita";
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
        private: request.private,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_QIITA_TOKEN}`,
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
