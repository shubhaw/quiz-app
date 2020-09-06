import { LOGIN } from "./actionTypes";

const initialState = {

}

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case LOGIN: return {...state, loginDetails: action.loginDetails };
        default: return state;
    }
}