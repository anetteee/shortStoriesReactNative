import { atom } from "recoil";

//The atom represents the state
export const pageNumberState = atom<number>({
    key: "pageNumberState", //Unique identifier internally
    default: 1, //Initial value of atom
});
