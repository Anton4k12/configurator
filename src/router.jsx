import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ConfiguratorDataProvider } from "./providers/configurator-data-provider";
import { HomePage } from "./pages/home";
import { ModelPage } from "./pages/model";
import { TestPage } from "./pages/test";
import { ConfiguratorPage } from "./pages/configurator";
import { Mobile } from "./pages/mobile";

export const routes = {
  home: "/",
  model: "/:modelName",
  subModel: "/:modelName/:subModelName",
  subModelTest: "/:modelName/:subModelName/test",
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={routes.home} element={<HomePage />}></Route>
      <Route path={routes.model} element={<ModelPage />}></Route>
      <Route
        path={routes.subModel}
        element={
          <ConfiguratorDataProvider>
            <Mobile></Mobile>
          </ConfiguratorDataProvider>
        }
      ></Route>
      <Route path={routes.subModelTest} element={<TestPage />}></Route>
    </>,
  ),
);
