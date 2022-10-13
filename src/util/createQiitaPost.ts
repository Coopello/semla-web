import { ItemsPost } from "src/api";
import type { PostContentsForm } from "src/type";

import { convertContentsToRequest } from "./";

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
