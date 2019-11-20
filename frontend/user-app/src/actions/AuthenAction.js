import * as types from '../constants/actionTypes'
import axios from 'axios'
// import { message } from 'antd'
import { objectToForm, apiUrl } from '../config'

export function requestLogin(requestData, props) {
    return (dispatch) => {
        dispatch({
            type: types.POST_LOGIN_REQUEST,
        });
        return axios.request({
            url: apiUrl + '/user/login',
            method: "post",
            data: objectToForm(requestData),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(res => {
            localStorage.setItem('username', res.data.user.username);
            localStorage.setItem('accessToken', res.data.token)
            dispatch({
                type: types.POST_LOGIN_REQUEST_SUCCESS
            })
            if (props)
                props.history.push('/')
        }).catch(err => {
            if (err && err.response) {
                console.log(err.response)
                // message.error(err.response.data.message)
            }
            dispatch({
                type: types.POST_LOGIN_REQUEST_FAIL,
            });

        })
    }
}


export function logoutUser(props) {
    return (dispatch) => {
        dispatch({
            type: types.USER_LOGOUT,
        });
        if (props)
            props.history.push('/login')
    }
}

