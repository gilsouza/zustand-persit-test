import {StateCreator} from 'zustand';
import {BearSlice, Store} from './interfaces';

export const createBearSlice: StateCreator<
  Store,
  [['zustand/devtools', never], ['zustand/persist', unknown]],
  [],
  BearSlice
> = set => ({
  bears: 0,
  bears2: 0,
  addBear: () => set(state => ({bears: state.bears + 1})),
  addBear2: () => set(state => ({bears: state.bears2 + 1})),
  eatFish: () => set(state => ({fishes: state.fishes - 1})),
});
