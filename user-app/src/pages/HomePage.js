import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { logoutUser } from '../actions/AuthenAction'
class HomePage extends React.Component {
    render() {
        if (!localStorage.getItem('accessToken')) {
            return <Redirect to="/login" />
        }
        return null
    }
}

const mapStatetoProps = state => {
    return {
        ...state.UserReducers
    }

}

const mapDispatchToProps = dispatch => ({
    logoutUser: (props) => dispatch(logoutUser(props)),

})
export default connect(mapStatetoProps, mapDispatchToProps)(HomePage)