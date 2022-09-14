import { useForm } from "@mantine/form";
import type { PostContentsForm } from "src/type";

/**
 * @package
 */
export const useMainPageForm = () => {
  const { setValues, values } = useForm<Omit<PostContentsForm, "token">>({
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
  });

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

  return {
    handleChangeBodyContent,
    handleChangeTitle,
    values,
  };
};
