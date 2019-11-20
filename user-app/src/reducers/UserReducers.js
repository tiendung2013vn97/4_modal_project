import * as types from '../constants/actionTypes'

const initialState = {
    isLoadingRegister: false,
}

const UserReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_USERS_REQUEST:
            return {
                ...state,
                isLoadingRegister: true,
            }
        case types.ADD_USERS_REQUEST_SUCCESS:
            return {
                ...state,
                isLoadingRegister: false,
            }
        case types.ADD_USERS_REQUEST_FAIL:
            return {
                ...state,
                isLoadingRegister: false
            }

        default:
            return state;
    }
}
export default UserReducers
