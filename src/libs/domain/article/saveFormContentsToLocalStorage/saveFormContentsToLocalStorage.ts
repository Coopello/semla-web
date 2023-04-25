import type { PostContentsForm } from "src/type";

/**
 * @package
 */
export const saveFormContentsToLocalStorage = (
  contents: Omit<PostContentsForm, "token">
) => {
  localStorage.setItem("formContents", JSON.stringify(contents));
};
