import create from 'zustand';
import {persist, devtools} from 'zustand/middleware';
import {
  createBearSlice,
  createFishSlice,
  createPeopleSlice,
  Store,
} from './slices';
import {persistConfig} from './persist';

export const useStore = create<Store>()(
  devtools(
    persist(
      (...a) => ({
        ...createBearSlice(...a),
        ...createFishSlice(...a),
        ...createPeopleSlice(...a),
      }),
      persistConfig,
    ),
  ),
);
