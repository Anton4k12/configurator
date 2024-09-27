import { fetcher } from "@/data";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { Mobile } from "./mobile";
import { LoadingScreen } from "@/components/shared/loading-screen";
import { createConfiguratorStore, ConfiguratorContext } from "@/state";
import { useRef } from "react";
import { ConfiguratorProvider } from "@/state/v2";

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

  const initialWheel = subModelDetailsData.wheels.find((wheel) => {
    return wheel.price === null;
  });

  const initialBrake = subModelDetailsData.brakeCalipers.find((brake) => {
    return brake.price === null;
  });

  const initialTrim = subModelDetailsData.trim.find((trim) => {
    return trim.price === null;
  });

  const initialState = {
    selectedWheel: initialWheel,
    selectedBrake: initialBrake,
    selectedTrim: initialTrim,
    selectedColor: subModelDetailsData.colors[1],
    selectedSeat: subModelDetailsData.seats[0],
  };

  return (
    <ConfiguratorProvider
      createStore={() => createConfiguratorStore(initialState)}
    >
      <Mobile
        subModels={subModelsData.subModels}
        data={subModelDetailsData}
      ></Mobile>
    </ConfiguratorProvider>
  );
};
