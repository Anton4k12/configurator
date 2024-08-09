import { useLocation } from "react-router-dom";

export const ConfiguratorPage = () => {
  const { state, pathname } = useLocation();
  console.log(pathname, state);
  return <div>hello we're on configurator page</div>;
};
