import { create } from "zustand";
import { createContext } from "zustand-di";

const DEFAULT_PROPS = {
  selectedWheel: {},
  selectedColor: {},
  selectedTrim: {},
  selectedBrake: {},
  selectedSeat: {},
  selectedPackagesIds: [],
  selectedOptionsIds: [],
};

/**
 * @typedef {Object} InitialState
 * @property {object} selectedWheel - The currently selected wheel.
 * @property {object} selectedColor - The currently selected color.
 * @property {object} selectedTrim - The currently selected trim.
 * @property {object} selectedBrake - The currently selected brake.
 * @property {object} selectedSeat - The currently selected seat.
 */

export const [ConfiguratorProvider, useConfiguratorStore] = createContext();

/**
 *
 * @param {InitialState} initialState
 * @returns
 */
export const createConfiguratorStore = (initialState) =>
  create((set, get) => ({
    ...DEFAULT_PROPS,
    ...initialState,

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
