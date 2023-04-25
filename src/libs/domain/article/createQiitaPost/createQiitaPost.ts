import { createArticle } from "src/apis/createArticle";
import type { PostContentsForm } from "src/type";

/**
 * @package
 */
export const createQiitaPost = () => {
  const sendCreateQiitaPostRequest = async (request: PostContentsForm) => {
    const { data, error } = await createArticle(
      convertContentsToRequest(request)
    );

    if (!!error || !data) {
      return "FAILURE";
    }

    return "SUCCESS";
  };

  return { sendCreateQiitaPostRequest };
};

const ITEMS = {
  oneWord: "# 一言まとめ",
  overView: "# 調べたことを深掘り",
  myIdea: "# 自分の考え",
  reference: "# 参考文献",
} as const;

const convertContentsToRequest = (contents: PostContentsForm) => {
  const body = Object.keys(contents.bodyContents).reduce(
    (body: string, key: string) => {
      body += `${ITEMS[key as keyof PostContentsForm["bodyContents"]]}\n${
        contents.bodyContents[key as keyof PostContentsForm["bodyContents"]]
      }\n`;

      return body;
    },
    ""
  );

  return {
    title: contents.title,
    body,
    tags: contents.tags,
    token: contents.token,
    private: process.env.NODE_ENV === "production" ? false : true,
  };
};
