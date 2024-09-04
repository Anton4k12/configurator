import { Spinner } from "../icons/spinner";
import { Header } from "./header";

export const LoadingScreen = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header color="#FFFFFF"></Header>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Spinner className="size-10"></Spinner>
      </div>
    </div>
  );
};
