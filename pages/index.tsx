import type { CustomNextPage } from "next";
import { MainLayout } from "src/layout";
import { Main } from "src/pageComponent/index";

const MainPage: CustomNextPage = () => <Main />;

MainPage.getLayout = MainLayout;

export default MainPage;
