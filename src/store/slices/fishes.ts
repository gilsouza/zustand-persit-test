import {StateCreator} from 'zustand';
import {FishSlice, Store} from './interfaces';

export const createFishSlice: StateCreator<
  Store,
  [['zustand/devtools', never], ['zustand/persist', unknown]],
  [],
  FishSlice
> = set => ({
  fishes: 0,
  addFish: () => set(state => ({fishes: state.fishes + 1})),
});
