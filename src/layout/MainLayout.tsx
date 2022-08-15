import type { CustomLayout } from "next";
import { useScreenSize } from "src/lib";

/**
 * @package
 */
export const MainLayout: CustomLayout = (page) => {
  const { isMobile } = useScreenSize();

  return (
    <main
      className={`min-h-screen bg-custom-gray  ${isMobile ? "p-4" : "p-16"}`}
    >
      {page}
    </main>
  );
};
