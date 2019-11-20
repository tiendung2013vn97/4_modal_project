import { combineReducers } from 'redux'
import AuthenReducers from './AuthenReducers'
import UserReducers from './UserReducers'

export default combineReducers({
    AuthenReducers,
    UserReducers
})