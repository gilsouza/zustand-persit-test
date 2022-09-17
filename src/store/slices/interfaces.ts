export interface FishSlice {
    fishes: number;
    addFish: () => void;
}

export interface BearSlice {
    bears: number;
    addBear: () => void;
    eatFish: () => void;
}

export type Store = FishSlice & BearSlice;
