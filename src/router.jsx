import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ConfiguratorDataProvider } from "./providers/configurator-data-provider";
import { HomePage } from "./pages/HomePage";
import { ModelPage } from "./pages/ModelPage";

import { ConfiguratorPage } from "./pages/ConfiguratorPage";
import { ScrollTestPage } from "./pages/ScrollTestPage";

import { Toaster } from "sonner";
import { Root } from "./components/shared/root";

export const routes = {
  home: "/",
  model: "/:modelName",
  subModel: "/:modelName/:subModelName",
  subModelTest: "/:modelName/:subModelName/test",
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Root></Root>}>
      <Route path={routes.home} element={<HomePage />}></Route>
      <Route path={routes.model} element={<ModelPage />}></Route>
      <Route
        path={routes.subModel}
        element={
          <ConfiguratorDataProvider>
            <ConfiguratorPage></ConfiguratorPage>
          </ConfiguratorDataProvider>
        }
      ></Route>
      <Route
        path={routes.subModelTest}
        element={
          <ConfiguratorDataProvider>
            <ScrollTestPage></ScrollTestPage>
          </ConfiguratorDataProvider>
        }
      ></Route>
    </Route>,
  ),
);
