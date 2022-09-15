import type { PostContentsForm } from "src/type";

/**
 * @package
 */
export const getFormContentsFromLocalStorage = () => {
  const formContentsRow = localStorage.getItem("formContents");

  return formContentsRow
    ? (JSON.parse(formContentsRow) as Omit<PostContentsForm, "token">)
    : null;
};
