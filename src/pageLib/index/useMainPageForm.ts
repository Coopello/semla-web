import { useForm } from "@mantine/form";
import { createQiitaPost } from "src/lib";
import type { PostContentsForm } from "src/type";

/**
 * @package
 */
export const useMainPageForm = () => {
  const { sendCreateQiitaPostRequest } = createQiitaPost();
  const { reset, setValues, values } = useForm<PostContentsForm>({
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

  const handleSubmitContents = async () => {
    const type = await sendCreateQiitaPostRequest(values);

    if (type === "SUCCESS") {
      reset();
    }
  };

  return {
    handleChangeBodyContent,
    handleChangeTitle,
    handleSubmitContents,
    values,
  };
};
