import axios from 'axios'
// import { message } from 'antd'
import { apiUrl } from '../config'
export function getUsers(props) {
    return (dispatch) => {
        return axios.request({
            url: apiUrl + '/users',
            method: "get",
        }).then(res => {
            if (res.status === 200) {
                dispatch({
                    type: "GET_USERS",
                    payload: res.data.users
                })
            }
            else {
                // message.error(res.data.message)
            }
        }).catch(err => {
            if (err && err.response) {
                console.log(err.response)
                // message.error(err.response.data.message)
            }
        })
    }
}

export function logoutUser(props) {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('username');
    if (props)
        props.history.push('/login')
}
