import AsyncStorage from '@react-native-async-storage/async-storage';
import {PersistOptions} from 'zustand/middleware';
import {mergeDeepLeft} from 'ramda';

import {Store} from '../slices';

const PERSIST_VERSION = 0;
//https://github.com/pmndrs/zustand/pull/1165
//update persist merge and migrate types #1165
export const persistConfig: PersistOptions<Store, unknown> = {
  name: 'app-store-persist',
  version: PERSIST_VERSION,
  getStorage: () => AsyncStorage,
  partialize: store => ({
    bears: store.bears,
  }),
  merge: (persistedState, currentState) =>
    mergeDeepLeft(persistedState as object, currentState),
};
