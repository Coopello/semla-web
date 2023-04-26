import { useForm } from "@mantine/form";
import { getContentTitleList } from "src/libs/domain/article/getCotentTitleList";
import { getFormContentsFromLocalStorage } from "src/libs/domain/article/getFormContentsFromLocalStorage";
import type { PostContentsForm } from "src/models/article";

/**
 * @package
 */
export const useContentsForm = () => {
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
  const titleList = getContentTitleList();

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
    setValues({
      ...values,
      bodyContents: {
        ...values.bodyContents,
        [key]: value,
      },
    });
  };

  return {
    handleChangeBodyContent,
    handleChangeTitle,
    handleSetFormContentsFormLocalStorage,
    reset,
    titleList,
    values,
  };
};
