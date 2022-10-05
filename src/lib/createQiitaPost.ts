import { ItemsPost } from "src/api";
import { convertContentsToRequest } from "src/lib";
import type { PostContentsForm } from "src/type";

/**
 * @package
 */
export const createQiitaPost = () => {
  const sendCreateQiitaPostRequest = async (request: PostContentsForm) => {
    const result = await ItemsPost(convertContentsToRequest(request));

    if (result.type === "SUCCESS") {
      return "SUCCESS";
    }

    return "FAILURE";
  };

  return { sendCreateQiitaPostRequest };
};
