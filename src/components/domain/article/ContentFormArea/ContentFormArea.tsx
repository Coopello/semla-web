import type { FC, ReactNode } from "react";
import { useScreenSize } from "src/lib";

/**
 * @package
 */
export const ContentFormArea: FC<{
  mainContents: ReactNode;
  sideMenuArea: ReactNode;
}> = ({ mainContents, sideMenuArea }) => {
  const { isMobile } = useScreenSize();

  return (
    <div className="flex gap-10">
      {!isMobile ? sideMenuArea : null}
      <ul
        className={`flex  flex-1 flex-col gap-4 ${
          isMobile
            ? ""
            : "h-[calc(100vh_-_128px)] overflow-x-hidden overflow-y-scroll pb-8"
        }`}
        style={{
          scrollBehavior: "smooth",
        }}
      >
        {mainContents}
      </ul>
    </div>
  );
};
