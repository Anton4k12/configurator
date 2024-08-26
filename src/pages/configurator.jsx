import { ConfiguratorPageContents } from "@/components/configurator/configurator-page-contents";
import { Spinner } from "@/components/icons/spinner";
import { Header } from "@/components/shared/header";
import { fetcher } from "@/data";
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

  return <ConfiguratorPageContents data={data}></ConfiguratorPageContents>;
};
