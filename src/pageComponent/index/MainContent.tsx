import { QuestionIcon } from "public/svg";
import type { FC } from "react";
import { TextArea } from "src/component/TextArea";
import { useScreenSize } from "src/lib";
import type { PostContentsForm, TitleItem } from "src/type";

/**
 * @package
 */
export const MainContent: FC<{
  handleChangeBodyContent: (
    key: keyof PostContentsForm["bodyContents"],
    value: string
  ) => void;
  item: TitleItem;
  sectionId: keyof PostContentsForm["bodyContents"];
  value: string;
}> = ({
  handleChangeBodyContent,
  item: { description, title, type },
  sectionId,
  value,
}) => {
  const { isMobile } = useScreenSize();

  return (
    <li className="flex-1 rounded-xl bg-white p-8" id={sectionId}>
      <TextArea
        autosize
        classNames={{
          label: "cursor-pointer",
          wrapper: "h-auto",
          input: "h-auto text-lg",
        }}
        label={
          <div className="mb-2 flex items-center">
            <h1 className="mr-6 text-2xl font-bold">{title}</h1>
            {!isMobile ? (
              <>
                <QuestionIcon />
                <p className="ml-2 text-sm">{description}</p>
              </>
            ) : null}
          </div>
        }
        variant="unstyled"
        value={value}
        placeholder={isMobile ? description : undefined}
        onChange={(e) => handleChangeBodyContent(type, e.target.value)}
      />
    </li>
  );
};
