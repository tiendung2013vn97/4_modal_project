import * as types from '../constants/actionTypes'

const initialState = {
    isLoadingLogin: false,
}

const AuthenReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.POST_LOGIN_REQUEST:
            return {
                ...state,
                isLoadingLogin: true,
            }
        case types.POST_LOGIN_REQUEST_SUCCESS:
            return {
                ...state,
                isLoadingLogin: false,
            }
        case types.POST_LOGIN_REQUEST_FAIL:
            return {
                ...state,
                isLoadingLogin: false
            }
        case types.USER_LOGOUT:
            localStorage.removeItem('accessToken');
            localStorage.removeItem('username');
            return {
                ...state,
            }

        default:
            return state;
    }
}
export default AuthenReducers
