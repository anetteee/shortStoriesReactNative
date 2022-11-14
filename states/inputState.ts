import { atom } from "recoil";

//The atom represents the state
export const inputState = atom<String>({
    key: "inputState", //Unique identifier internally
    default: null, //Initial value of atom
});