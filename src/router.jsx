import { Route } from "react-router-dom";
import { HomePage } from "./pages/home";
import { ConfiguratorPage } from "./pages/configurator";
import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { TestPage } from "./pages/test";
import { CarPage } from "./pages/car";

export const routes = {
  home: "/",
  car: "/:carName",
  model: "/:carName/:carModel",
  configurator: "/configurator",
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={routes.home} element={<HomePage />}></Route>
      <Route path={routes.car} element={<CarPage />}></Route>
      <Route path={routes.model} element={<ConfiguratorPage />}></Route>
    </>,
  ),
);
