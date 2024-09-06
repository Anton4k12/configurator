import { ConfiguratorPageContents } from "@/components/configurator/configurator-page-contents";
import { LoadingScreen } from "@/components/shared/loading-screen";
import { fetcher } from "@/data";
import { ConfiguratorContext, createConfiguratorStore } from "@/state";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";

export const ConfiguratorPage = () => {
  const { modelName, subModelName } = useParams();

  const { data: subModelDetailsData, isLoading: isLoadingSubModelDetails } =
    useSWR(`/subModelDetails/${modelName}/${subModelName}`, fetcher);

  const { data: subModelsData, isLoading: isLoadingSubModels } = useSWR(
    `/subModels/${modelName}`,
    fetcher,
  );

  if (isLoadingSubModelDetails || isLoadingSubModels) {
    return <LoadingScreen></LoadingScreen>;
  }

  return (
    <StateProvider data={subModelDetailsData}>
      <ConfiguratorPageContents
        subModels={subModelsData.subModels}
        data={subModelDetailsData}
      ></ConfiguratorPageContents>
    </StateProvider>
  );
};

const StateProvider = ({ data, children }) => {
  const initialWheel = data.wheels.find((wheel) => {
    return wheel.price === null;
  });

  const initialBrake = data.brakeCalipers.find((brake) => {
    return brake.price === null;
  });

  const initialTrim = data.trim.find((trim) => {
    return trim.price === null;
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
