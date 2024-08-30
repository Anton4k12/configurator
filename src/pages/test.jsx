import { Spinner } from "@/components/icons/spinner";
import { Header } from "@/components/shared/header";
import { fetcher } from "@/data";
import { ConfiguratorContext, createConfiguratorStore } from "@/state";
import { useContext, useRef } from "react";
import useSWR from "swr";
import { useStore } from "zustand";

export const TestPage = () => {
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
      <TestPageContents data={data}></TestPageContents>;
    </StateProvider>
  );
};

const TestPageContents = ({ data }) => {
  const store = useContext(ConfiguratorContext);
  const selectedWheel = useStore(store, (state) => state.selectedWheel);
  const selectWheel = useStore(store, (state) => state.selectWheel);
  return (
    <div>
      <pre className="pb-2 text-xs">{JSON.stringify(data.wheels, null, 2)}</pre>
      <pre className="pb-2 text-xs">
        {JSON.stringify(selectedWheel, null, 2)}
      </pre>
      <button onClick={() => selectWheel(data.wheels[0])}>Slect wheel</button>
    </div>
  );
};
