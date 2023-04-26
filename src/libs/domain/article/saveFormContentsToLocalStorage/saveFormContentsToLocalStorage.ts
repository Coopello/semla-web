import type { PostContentsForm } from "src/models/article";

/**
 * @package
 */
export const saveFormContentsToLocalStorage = (
  contents: Omit<PostContentsForm, "token">
) => {
  localStorage.setItem("formContents", JSON.stringify(contents));
};
