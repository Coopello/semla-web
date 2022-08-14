import type { FC } from "react";
import { BottomActionArea } from "src/pageComponent/index/BottomActionArea";
import { MainContent } from "src/pageComponent/index/MainContent";
import { MainContentsArea } from "src/pageComponent/index/MainContentsArea";
import { SideMenuArea } from "src/pageComponent/index/SideMenuArea";
import { TITLE_ITEMS } from "src/pageLib";

export const Main: FC = () => (
  <div>
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
    <BottomActionArea />
  </div>
);
