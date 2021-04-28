import { ANIMAIONS } from "../shared/animations";

export const initialState = {
    animations: ANIMAIONS,
};

export const Reducer = (state = initialState, action) => {
    return state; //for now, return state that was passed in
}