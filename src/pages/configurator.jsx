import { ConfiguratorPageContents } from "@/components/configurator/configurator-page-contents";
import { Spinner } from "@/components/icons/spinner";
import { Header } from "@/components/shared/header";
import { fetcher } from "@/data";
import { createConfiguratorStore, ConfiguratorContext } from "@/state";
import { useRef } from "react";
import useSWR from "swr";

export const ConfiguratorPage = () => {
  const { data, isLoading } = useSWR("/configurator", fetcher);

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header color="#FFFFFF"></Header>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Spinner className="size-10"></Spinner>
        </div>
      </div>
    );
  }

  return (
    <StateProvider data={data}>
      <ConfiguratorPageContents data={data}></ConfiguratorPageContents>;
    </StateProvider>
  );
};

const StateProvider = ({ data, children }) => {
  const initialWheel = data.wheels.find((wheel) => {
    if (wheel.price === null) {
      return true;
    } else {
      return false;
    }
  });

  const initialBrake = data.brakeCalipers.find((brake) => {
    if (brake.price === null) {
      return true;
    } else {
      return false;
    }
  });

  const initialTrim = data.trim.find((trim) => {
    if (trim.price === null) {
      return true;
    } else {
      return false;
    }
  });

  const store = useRef(
    createConfiguratorStore({
      selectedWheel: initialWheel,
      selectedBrake: initialBrake,
      selectedTrim: initialTrim,
      selectedColor: data.colors[1],
      selectedSeat: data.seats[0],
    }),
  ).current;
  return (
    <ConfiguratorContext.Provider value={store}>
      {children}
    </ConfiguratorContext.Provider>
  );
};
