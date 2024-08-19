import { Header } from "@/components/shared/header";
import { useLocation } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "@/data";
import { Spinner } from "@/components/icons/spinner";
import { TopNavBar } from "@/components/configurator/top-navbar";
import { Visuals } from "@/components/configurator/visuals";
import { BottomNavBar } from "@/components/configurator/bottom-navbar";
import { Package } from "@/components/configurator/package";

export const ConfiguratorPage = () => {
  const { state, pathname } = useLocation();

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

  const firstPackage = data.packages[0];

  return (
    <div className="pb-96">
      <Header color="#FFFFFF"></Header>

      <hr />

      <TopNavBar></TopNavBar>

      <hr />

      <Visuals data={data}></Visuals>

      <div className="w-1/2 px-3">
        <Package {...firstPackage}></Package>
      </div>

      <BottomNavBar></BottomNavBar>
    </div>
  );
};
