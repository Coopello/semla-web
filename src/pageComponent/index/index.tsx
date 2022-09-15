import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/router";
import type { FC } from "react";
import { getQiitaRedirectUrl, useScreenSize } from "src/lib";
import { BottomActionArea } from "src/pageComponent/index/BottomActionArea";
import { HeaderArea } from "src/pageComponent/index/HeaderArea";
import { MainContent } from "src/pageComponent/index/MainContent";
import { MainContentsArea } from "src/pageComponent/index/MainContentsArea";
import { PostActionButton } from "src/pageComponent/index/PostActionButton";
import { PostConfirmDialog } from "src/pageComponent/index/PostConfirmDialog";
import { SideMenuArea } from "src/pageComponent/index/SideMenuArea";
import { TitleForm } from "src/pageComponent/index/TitleForm";
import { TITLE_ITEMS } from "src/pageLib/index";
import { useMainPageForm } from "src/pageLib/index";

export const Main: FC = () => {
  const router = useRouter();
  const { isMobile } = useScreenSize();
  const [isSubmitModal, handleSubmitModal] = useDisclosure(false);
  const { handleChangeBodyContent, handleChangeTitle, values } =
    useMainPageForm();

  return (
    <div className={isMobile ? "pt-[72px]" : ""}>
      {isMobile ? <HeaderArea /> : null}
      <MainContentsArea
        mainContents={
          <>
            <TitleForm
              handleChangeTitle={handleChangeTitle}
              value={values.title}
            />
            {TITLE_ITEMS.map((item) => (
              <MainContent
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
        <BottomActionArea onClick={handleSubmitModal.open} />
      ) : (
        <PostActionButton onClick={handleSubmitModal.open} />
      )}
      <PostConfirmDialog
        isModalOpen={isSubmitModal}
        onClose={handleSubmitModal.close}
        onSubmit={() => {
          const redirectUrl = getQiitaRedirectUrl();
          router.push(redirectUrl);
          handleSubmitModal.close();
        }}
      />
    </div>
  );
};
