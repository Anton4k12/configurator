import { ConfiguratorPage } from "@/pages/ConfiguratorPage";
import { LoadingScreen } from "@/components/shared/loading-screen";
import { fetcher } from "@/data";
import { createConfiguratorStore } from "@/state/v2";
import { ConfiguratorProvider } from "@/state/v2";
import { useParams } from "react-router-dom";
import useSWR from "swr";

export const ConfiguratorDataProvider = ({ children }) => {
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
    subModels: subModelsData.subModels,
    detailsData: subModelDetailsData,
  };

  return (
    <ConfiguratorProvider
      createStore={() => createConfiguratorStore(initialState)}
    >
      {children}
    </ConfiguratorProvider>
  );
};
