import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

export const Root = () => {
  return (
    <>
      <Outlet></Outlet>
      <Toaster></Toaster>
    </>
  );
};
