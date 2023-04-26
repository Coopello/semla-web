import { useDisclosure } from "@mantine/hooks";
import type { FC } from "react";
import { ConfirmDialog } from "src/components/domain/article/ConfirmDialog";
import { ContentFormArea } from "src/components/domain/article/ContentFormArea";
import { ContentForm } from "src/components/domain/article/CotentForm";
import { PostActionButton } from "src/components/domain/article/PostActionButton";
import { PostBottomActionArea } from "src/components/domain/article/PostButtonActionArea";
import { SideMenuArea } from "src/components/domain/article/SideMenuArea";
import { TitleForm } from "src/components/domain/article/TitleForm";
import { Header } from "src/components/ui/Header";
import { useContentsForm } from "src/libs/domain/article/useContentsForm";
import { useQiitaPost } from "src/libs/domain/article/usePostToQiita";
import { useScreenSize } from "src/libs/utils/useScreenSize";

/**
 * @package
 */
export const Main: FC = () => {
  const { isMobile } = useScreenSize();
  const [isSubmitModal, { close, open }] = useDisclosure(false);
  const {
    handleChangeBodyContent,
    handleChangeTitle,
    handleSetFormContentsFormLocalStorage,
    reset,
    titleList,
    values,
  } = useContentsForm();
  const { onSubmit } = useQiitaPost(close, {
    handleSetFormContentsFormLocalStorage,
    reset,
    values,
  });

  return (
    <div className={isMobile ? "pt-[72px]" : ""}>
      {isMobile ? <Header /> : null}
      <ContentFormArea
        mainContents={
          <>
            <TitleForm
              handleChangeTitle={handleChangeTitle}
              value={values.title}
            />
            {titleList.map((item) => (
              <ContentForm
                key={item.title}
                handleChangeBodyContent={handleChangeBodyContent}
                sectionId={item.type}
                item={item}
                value={values.bodyContents[item.type]}
              />
            ))}
          </>
        }
        sideMenuArea={<SideMenuArea />}
      />
      {!isMobile ? (
        <PostBottomActionArea onClick={open} />
      ) : (
        <PostActionButton onClick={open} />
      )}
      <ConfirmDialog
        isModalOpen={isSubmitModal}
        onClose={close}
        onSubmit={onSubmit}
      />
    </div>
  );
};
