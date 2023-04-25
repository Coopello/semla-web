import type { PostContentsForm } from "src/models/article";

/**
 * @package
 */
export const getFormContentsFromLocalStorage = () => {
  const formContentsRow = localStorage.getItem("formContents");

  return formContentsRow
    ? (JSON.parse(formContentsRow) as Omit<PostContentsForm, "token">)
    : null;
};
