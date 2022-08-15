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
      title: "Title",
      bodyContents: {
        oneWord: "",
        overView: "",
        myIdea: "",
        reference: "",
      },
      tags: [
        {
          name: "Ruby",
          versions: ["0.0.1"],
        },
      ],
    },
  });

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
    handleSubmitContents,
    values,
  };
};
