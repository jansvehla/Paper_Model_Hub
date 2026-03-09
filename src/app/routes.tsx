import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import ModelsPage from "./pages/ModelsPage";
import ModelDetailPage from "./pages/ModelDetailPage";
import AssemblyGuidePage from "./pages/AssemblyGuidePage";
import CustomizeModelPage from "./pages/CustomizeModelPage";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/models",
    Component: ModelsPage,
  },
  {
    path: "/models/:id",
    Component: ModelDetailPage,
  },
  {
    path: "/models/:id/assembly-guide",
    Component: AssemblyGuidePage,
  },
  {
    path: "/models/:id/customize",
    Component: CustomizeModelPage,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);