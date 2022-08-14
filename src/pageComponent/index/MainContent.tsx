import { QuestionIcon } from "public/svg";
import type { FC } from "react";
import { TextArea } from "src/component/TextArea";

/**
 * @package
 */
export const MainContent: FC<{ description: string; title: string }> = ({
  description,
  title,
}) => (
  <li className="flex-1 rounded-xl bg-white p-8">
    <TextArea
      autosize
      classNames={{
        wrapper: "h-auto",
        input: "h-auto text-lg",
      }}
      label={
        <div className="mb-2 flex items-center">
          <h1 className="mr-6 text-2xl font-bold">{title}</h1>
          <QuestionIcon />
          <p className="ml-2 text-sm">{description}</p>
        </div>
      }
      variant="unstyled"
    />
  </li>
);
