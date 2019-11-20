import * as types from '../constants/actionTypes'
import axios from 'axios'
import { message } from 'antd'
import { objectToForm, apiUrl } from '../config'
export function requestRegister(requestData, props) {
    return (dispatch) => {
        dispatch({
            type: types.ADD_USERS_REQUEST,
        });
        return axios.request({
            url: apiUrl + '/user/register',
            method: "post",
            data: objectToForm(requestData),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(res => {
            if (res.status === 200) {
                dispatch({
                    type: types.ADD_USERS_REQUEST_SUCCESS
                })
                props.history.push('/login')
            }
            else {
                message.error(res.data.message)
                dispatch({
                    type: types.ADD_USERS_REQUEST_FAIL,
                });
            }
        }).catch(err => {
            if (err && err.response) {
                console.log(err.response)
                // message.error(err.response.data.message)
            }
            dispatch({
                type: types.ADD_USERS_REQUEST_FAIL,
            });

        })
    }
}