import { atom } from "recoil";

//The atom represents the state
export const sortState = atom<String[]>({
    key: "sortState", //Unique identifier internally
    default: null, //Initial value of atom
});