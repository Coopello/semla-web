import { TextInput } from "@mantine/core";
import type { FC } from "react";

/**
 * @package
 */
export const TitleForm: FC<{
  handleChangeTitle: (value: string) => void;
  value: string;
}> = ({ handleChangeTitle, value }) => (
  <li>
    <TextInput
      classNames={{
        root: "w-full",
        input:
          "bg-white rounded-xl text-2xl font-bold py-4 px-8 box-content m-[1px] w-[calc(100%_-_64px)]",
      }}
      placeholder="この記事のタイトル"
      variant="unstyled"
      value={value}
      onChange={(e) => handleChangeTitle(e.target.value)}
    />
  </li>
);
