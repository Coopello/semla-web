import type { CustomNextPage } from "next";
import { Main } from "src/components/page/Main";
import { MainLayout } from "src/layout";

const MainPage: CustomNextPage = () => <Main />;

MainPage.getLayout = MainLayout;

export default MainPage;
