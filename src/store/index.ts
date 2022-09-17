import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { persistConfig } from "./persist";
import { createBearSlice, createFishSlice, Store } from "./slices";

export const useStore = create<Store>()(
    devtools(
        persist(
            (...a) => ({
                ...createBearSlice(...a),
                ...createFishSlice(...a),
            }),
            persistConfig
        )
    )
);
