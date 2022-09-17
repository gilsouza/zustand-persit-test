import create, {StateCreator, StoreApi, UseBoundStore} from 'zustand';

type ResetCallback = () => void;
type Resetter = {name: string; resetCallback: ResetCallback};
const zustandResetters: Resetter[] = [];

export const createResettableSlice = <TState>(
  name: string,
  createState: StateCreator<TState, [], [], any>,
  // slice: UseBoundStore<StoreApi<any>>,
): UseBoundStore<StoreApi<TState>> => {
  if (zustandResetters.find(resetter => resetter.name === name)) {
    throw Error(`A slice with name '${name}' already exists`);
  }

  const slice = create(createState);
  const initialState = slice.getState();
  const resetter: Resetter = {
    name,
    resetCallback: () => {
      slice.setState(initialState, true);
    },
  };
  zustandResetters.push(resetter);

  console.log(name, slice, initialState);

  return slice;
};

export const resetSlice = (name: string) => {
  zustandResetters.find(resetter => resetter.name === name)?.resetCallback();
};

export const resetAllSlices = () => {
  for (const {resetCallback} of zustandResetters) {
    resetCallback();
  }
};

// https://github.com/pmndrs/zustand/discussions/574

// const resetSet = new Set();
// const resettable = create => initialState => {
//   const useStore = create(() => initialState);
//   const reset = () => useStore.setState(initialState, true);
//   resetSet.add(reset);
//   return useStore;
// };
// const resetAll = () => resetSet.forEach(reset => reset());
