import { ConfiguratorPageContents } from "@/components/configurator/configurator-page-contents";
import { LoadingScreen } from "@/components/shared/loading-screen";
import { fetcher } from "@/data";
import { ConfiguratorContext, createConfiguratorStore } from "@/state";
import { ConfiguratorProvider } from "@/state/v2";
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
      <ConfiguratorPageContents
        subModels={subModelsData.subModels}
        data={subModelDetailsData}
      ></ConfiguratorPageContents>
    </ConfiguratorProvider>
  );
};
