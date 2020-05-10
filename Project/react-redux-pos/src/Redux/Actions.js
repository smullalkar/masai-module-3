import {
    REG_POST_REQ,
    REG_POST_SUCCESS,
    REG_POST_FAIL,
    LOGIN_USER_REQ,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGOUT,
    ADD_ITEM,
    REMOVE_ITEM
} from "./Actiontypes";

import axios from 'axios'

export const regPostReq = payload => {
    return {
        type: REG_POST_REQ,
        payload: payload || ""
    }
}

export const regPostSuccess = payload => ({
    type: REG_POST_SUCCESS,
    payload: payload
})

export const regPostFail = payload => ({
    type: REG_POST_FAIL,
    payload: payload
})

export const logUserReq = payload => {
    return {
        type: LOGIN_USER_REQ,
        payload
    }
}

export const logUserSuccess = payload => ({
    type: LOGIN_USER_SUCCESS,
    payload
})

export const logUserFail = payload => ({
    type: LOGIN_USER_FAIL,
    payload
})

export const logout = payload => ({
    type: LOGOUT,
    payload,
})

export const addItem = payload => ({
    type: ADD_ITEM,
    payload
})

export const removeItem = payload => ({
    type: REMOVE_ITEM,
    payload
})

export const postData = (payload) => {
    return dispatch => {
        dispatch(regPostReq());
        return axios
            .post(`http://localhost:8080/auth/register`,
                {
                    name: payload.name,
                    email: payload.email,
                    password: payload.pass,
                    username: payload.uname,
                    mobile: payload.mob,
                    description: payload.description
                }
            )
            .then(res => {
                return dispatch(regPostSuccess(res));
            })
            .catch(err => dispatch(regPostFail(err)));
    };
};

export const loginUser = (payload) => dispatch => {
    dispatch(logUserReq(payload))
    return axios.post("http://localhost:8080/auth/login", {
        password: payload.pass,
        username: payload.uname
    })
        .then(res => res.data?.token)
        .then(res => dispatch(logUserSuccess(res)))
        .catch(err => dispatch(logUserFail(err)))
}
