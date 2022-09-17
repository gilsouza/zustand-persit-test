import { StateCreator } from "zustand";
import { BearSlice, Store } from "./interfaces";

export const createBearSlice: StateCreator<
    Store,
    [["zustand/devtools", never], ["zustand/persist", unknown]],
    [],
    BearSlice
> = (set) => ({
    bears: 0,
    addBear: () => set((state) => ({ bears: state.bears + 1 })),
    eatFish: () => set((state) => ({ fishes: state.fishes - 1 })),
});
