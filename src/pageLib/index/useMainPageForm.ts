import { useForm } from "@mantine/form";
import { getFormContentsFromLocalStorage } from "src/pageLib/index/getFormContentsFromLocalStorage";
import { useQiitaPost } from "src/pageLib/index/useQiitaPost";
import type { PostContentsForm } from "src/type";

/**
 * @package
 */
export const useMainPageForm = () => {
  const { reset, setValues, values } = useForm<Omit<PostContentsForm, "token">>(
    {
      initialValues: {
        title: "",
        bodyContents: {
          oneWord: "",
          overView: "",
          myIdea: "",
          reference: "",
        },
        tags: [
          {
            name: "メモ",
            versions: ["0.0.1"],
          },
        ],
      },
    }
  );

  const handleSetFormContentsFormLocalStorage = () => {
    const formContentsRow = getFormContentsFromLocalStorage();

    if (!formContentsRow) return null;

    // もしリクエストが成功しなかった場合にリクエストし直せるように値を入れておく
    setValues(formContentsRow);

    // リクエスト用に値を返却しておく
    return formContentsRow;
  };

  const handleChangeTitle = (value: string) => {
    setValues((prev) => ({
      ...prev,
      title: value,
    }));
  };

  const handleChangeBodyContent = (
    key: keyof PostContentsForm["bodyContents"],
    value: string
  ) => {
    setValues((prev) => ({
      ...prev,
      bodyContents: {
        ...prev.bodyContents,
        [key]: value,
      },
    }));
  };

  useQiitaPost(reset, handleSetFormContentsFormLocalStorage);

  return {
    handleChangeBodyContent,
    handleChangeTitle,
    values,
  };
};
