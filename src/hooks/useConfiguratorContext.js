import { ConfiguratorContext } from "@/state";
import { useContext } from "react";
import { useStore } from "zustand";

/**
 * @typedef {import("@/state").ConfiguratorState} ConfiguratorState
 */

/**
 * @param {(state: ConfiguratorState) => any} selector - Function to select a part of the state.
 * @returns {*} The selected state.
 */
export const useConfiguratorContext = (selector) => {
  /** @type {import('zustand').StoreApi<ConfiguratorState>} */
  const store = useContext(ConfiguratorContext);
  if (!store) throw new Error("Missing BearContext.Provider in the tree");
  return useStore(store, selector);
};
