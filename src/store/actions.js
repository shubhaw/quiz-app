import { LOGIN } from "./actionTypes";
import axios from "axios";

export const login = (loginDetails) => {
    return dispatch => {
        axios.get("/")
            .then(response => {
                console.log(response);
                return dispatch(storeLoginInformation(loginDetails));
            })
            .catch(err => console.log(err));
    }
}

const storeLoginInformation = (loginDetails) => {
    return {
        type: LOGIN,
        loginDetails
    }
}