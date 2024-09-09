import { create, createStore } from "zustand";
import { createContext } from "react";

/**
 * @typedef {Object} ConfiguratorState
 * @property {Object} selectedColor
 * @property {Object} selectedWheel
 * @property {Object} selectedBrake
 * @property {Object} selectedTrim
 * @property {Object} selectedSeat
 * @property {string[]} selectedPackagesIds
 * @property {string[]} selectedOptionsIds
 * @property {function} selectColor
 * @property {function} selectWheel
 * @property {function} selectBrake
 * @property {function} selectTrim
 * @property {function} selectSeat
 * @property {function} addPackage
 * @property {function} removePackage
 * @property {function} addOption
 * @property {function} removeOption
 * @property {function} getPrice
 */

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

  return createStore((set, get) => ({
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
          return id !== packId;
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
          return id !== optionId;
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

    getPrice: ({ startingPrice, options, packages }) => {
      const state = get();

      const selectedPackages = packages.filter((pack) => {
        return state.selectedPackagesIds.includes(pack.id);
      });

      const totalPricePackage = selectedPackages.reduce(
        (acc, pack) => acc + pack.price,
        0,
      );

      const selectedOptions = options.filter((option) => {
        return state.selectedOptionsIds.includes(option.id);
      });

      const totalPriceOption = selectedOptions.reduce(
        (acc, option) => acc + option.price,
        0,
      );

      const price =
        startingPrice +
        state.selectedWheel.price +
        state.selectedColor.price +
        state.selectedTrim.price +
        state.selectedBrake.price +
        totalPricePackage +
        totalPriceOption;

      return price;
    },
  }));
};
