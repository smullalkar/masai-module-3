import { 
    REG_POST_REQ, 
    REG_POST_SUCCESS, 
    REG_POST_FAIL, 
    LOGIN_USER_REQ, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL, 
    LOGOUT
} from "./Actiontypes";

export const initStore = {
    isLoading: false,
    details: '',
    response: '',
    error: '',
    token: '',
    userName: '',
    isError: false,
    isLoggedin: false,
};

export default (state = initStore, action) => {
    console.log('action called', action);
    switch (action.type) {
        case REG_POST_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case REG_POST_SUCCESS:

            return {
                ...state,
                isLoading: false,
                response: action.payload.status,
                error: state.error,
            };
        case REG_POST_FAIL:
            return {
                ...state,
                isLoading: false,
                response: state.reponse,
                error: action.payload
            };
        case LOGIN_USER_REQ:
            return {
                ...state,
                isLoading: true,
                userName: action.payload.uname
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                token: action.payload,
                isLoggedin: true,
            }
        case LOGIN_USER_FAIL:
            return {
                ...state,
                isError: true,
            }
        case LOGOUT:
            return {
                ...state,
                isLoggedin: action.payload,
            }
        default:
            return state;
    }
};
