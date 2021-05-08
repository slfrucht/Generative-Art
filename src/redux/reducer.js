import { SHORT_ANIMAIONS } from "../shared/shortAnimations";
import { HOME_PAGE_ELEMENTS } from "../shared/homePageElements";

export const initialState = {
    shortAnimations: SHORT_ANIMAIONS,
    homePageElements: HOME_PAGE_ELEMENTS
};

export const Reducer = (state = initialState, action) => {
    return state; //for now, return state that was passed in
}