import { fetcher } from "@/data";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { Mobile } from "./mobile";
import { LoadingScreen } from "@/components/shared/loading-screen";
import { createConfiguratorStore, ConfiguratorContext } from "@/state";
import { useRef } from "react";

export const TestPage = () => {
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
      <Mobile
        subModels={subModelsData.subModels}
        data={subModelDetailsData}
      ></Mobile>
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
