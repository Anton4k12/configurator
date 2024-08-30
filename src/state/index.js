import { create, createStore } from "zustand";
import { createContext } from "react";

export const ConfiguratorContext = createContext(null);

export const createConfiguratorStore = (initProps) => {
  const DEFAULT_PROPS = {
    selectedWheel: {},
    selectedColor: {},
    selectedTrim: {},
    selectedBrake: {},
    selectedSeat: {},
    selectedPackagesIds: [],
    selectedOptionsIds: [],
  };

  return createStore((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,

    addPackage: (id) => {
      set((state) => ({
        selectedPackagesIds: [...state.selectedPackagesIds, id],
      }));
    },

    removePackage: (id) => {
      set((state) => ({
        selectedPackagesIds: state.selectedPackagesIds.filter((packId) => {
          if (id === packId) {
            return false;
          } else {
            return true;
          }
        }),
      }));
    },

    addOption: (id) => {
      set((state) => ({
        selectedOptionsIds: [...state.selectedOptionsIds, id],
      }));
    },

    removeOption: (id) => {
      set((state) => ({
        selectedOptionsIds: state.selectedOptionsIds.filter((optionId) => {
          if (id === optionId) {
            return false;
          } else {
            return true;
          }
        }),
      }));
    },

    selectWheel: (wheel) => {
      set({ selectedWheel: wheel });
    },

    selectColor: (color) => {
      set({ selectedColor: color });
    },

    selectTrim: (trim) => {
      set({ selectedTrim: trim });
    },

    selectBrake: (brake) => {
      set({ selectedBrake: brake });
    },

    selectSeat: (seat) => {
      set({ selectedSeat: seat });
    },
  }));
};
