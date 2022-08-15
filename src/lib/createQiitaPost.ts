import { showNotification } from "@mantine/notifications";
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
      showNotification({
        color: "green",
        title: "投稿完了",
        message: "Qiitaに投稿しました！",
      });

      return "SUCCESS";
    }

    showNotification({
      color: "red",
      title: "投稿失敗",
      message: "Qiitaに投稿できませんでした。",
    });

    return "FAILURE";
  };

  return { sendCreateQiitaPostRequest };
};
