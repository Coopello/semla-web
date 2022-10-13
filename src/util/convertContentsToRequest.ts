import type { PostQiita } from "src/model/PostQiita";
import type { PostContentsForm } from "src/type";

const ITEMS = {
  oneWord: "# 一言まとめ",
  overView: "# 調べたことを深掘り",
  myIdea: "# 自分の考え",
  reference: "# 参考文献",
} as const;

/**
 * @package
 */
export const convertContentsToRequest = (
  contents: PostContentsForm
): PostQiita["request"] => {
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
    private: false,
  };
};
