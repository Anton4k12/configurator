import { ConfiguratorPageContents } from "@/components/configurator/configurator-page-contents";
import { Spinner } from "@/components/icons/spinner";
import { Header } from "@/components/shared/header";
import { LoadingScreen } from "@/components/shared/loading-screen";
import { fetcher } from "@/data";
import { createConfiguratorStore, ConfiguratorContext } from "@/state";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";

export const ConfiguratorPage = () => {
  const { carName, carModel } = useParams();

  const { data, isLoading: isLoadingModelDetails } = useSWR(
    `/modelDetails/${carName}/${carModel}`,
    fetcher,
  );

  const { data: modelsData, isLoading: isLoadingModels } = useSWR(
    `/models/${carName}`,
    fetcher,
  );

  if (isLoadingModelDetails || isLoadingModels) {
    return <LoadingScreen></LoadingScreen>;
  }

  return (
    <StateProvider data={data}>
      <ConfiguratorPageContents
        models={modelsData.models}
        data={data}
      ></ConfiguratorPageContents>
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
