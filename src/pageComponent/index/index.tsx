import type { FC } from "react";
import { useScreenSize } from "src/lib";
import { BottomActionArea } from "src/pageComponent/index/BottomActionArea";
import { HeaderArea } from "src/pageComponent/index/HeaderArea";
import { MainContent } from "src/pageComponent/index/MainContent";
import { MainContentsArea } from "src/pageComponent/index/MainContentsArea";
import { PostActionButton } from "src/pageComponent/index/PostActionButton";
import { SideMenuArea } from "src/pageComponent/index/SideMenuArea";
import { TITLE_ITEMS } from "src/pageLib";

export const Main: FC = () => {
  const { isMobile } = useScreenSize();

  return (
    <div className={isMobile ? "pt-[72px]" : ""}>
      {isMobile ? <HeaderArea /> : null}
      <MainContentsArea
        mainContents={TITLE_ITEMS.map((item) => (
          <MainContent
            key={item.title}
            description={item.description}
            title={item.title}
          />
        ))}
        sideMenuArea={<SideMenuArea />}
      />
      {!isMobile ? <BottomActionArea /> : <PostActionButton />}
    </div>
  );
};
