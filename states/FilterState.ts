import { atom } from "recoil";

//The atom represents the state
export const filterState = atom<String[]>({
    key: "filterState", //Unique identifier internally
    default: null, //Initial value of atom
});
