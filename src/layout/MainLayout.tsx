import type { CustomLayout } from "next";

/**
 * @package
 */
export const MainLayout: CustomLayout = (page) => (
  <main className="min-h-screen bg-custom-gray p-16">{page}</main>
);
