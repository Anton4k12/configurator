import { Route } from "react-router-dom";
import { HomePage } from "./pages/home";
import { ConfiguratorPage } from "./pages/configurator";
import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { TestPage } from "./pages/test";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/configurator" element={<ConfiguratorPage />}></Route>
    </>,
  ),
);
