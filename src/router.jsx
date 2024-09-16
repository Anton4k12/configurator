import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ConfiguratorPage } from "./pages/configurator";
import { HomePage } from "./pages/home";
import { ModelPage } from "./pages/model";
import { TestPage } from "./pages/test";

export const routes = {
  home: "/",
  model: "/:modelName",
  subModel: "/:modelName/:subModelName",
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={routes.home} element={<HomePage />}></Route>
      <Route path={routes.model} element={<ModelPage />}></Route>
      <Route path={routes.subModel} element={<ConfiguratorPage />}></Route>
      <Route path="test" element={<TestPage></TestPage>}></Route>
    </>,
  ),
);
