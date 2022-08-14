import type { FC, ReactNode } from "react";

/**
 * @package
 */
export const MainContentsArea: FC<{
  mainContents: ReactNode;
  sideMenuArea: ReactNode;
}> = ({ mainContents, sideMenuArea }) => (
  <div className="flex gap-10">
    {sideMenuArea}
    <ul className="flex h-[calc(100vh_-_128px)] flex-1 flex-col gap-4 overflow-y-scroll pb-8">
      {mainContents}
    </ul>
  </div>
);
