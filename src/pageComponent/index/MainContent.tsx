import { QuestionIcon } from "public/svg";
import type { FC } from "react";
import { TextArea } from "src/component/TextArea";
import { useScreenSize } from "src/lib";

/**
 * @package
 */
export const MainContent: FC<{ description: string; title: string }> = ({
  description,
  title,
}) => {
  const { isMobile } = useScreenSize();

  return (
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
            {!isMobile ? (
              <>
                <QuestionIcon />
                <p className="ml-2 text-sm">{description}</p>
              </>
            ) : null}
          </div>
        }
        variant="unstyled"
        placeholder={isMobile ? description : undefined}
      />
    </li>
  );
};
