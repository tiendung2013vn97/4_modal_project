import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { requestLogin } from '../actions/AuthenAction'
import LoginForm from '../components/LoginForm'
class LoginPage extends React.Component {

    handleSubmitLoginForm = (e) => {
        this.props.requestLogin(e, this.props)
    }


    render() {
        if (localStorage.getItem('accessToken')) {
            return <Redirect to="/" />
        }
        return (
            <LoginForm
                {...this.props}
                handleSubmitLoginForm={(e) => this.handleSubmitLoginForm(e)}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state.AuthenReducers,
    }
}

const mapDispatchToProps = dispatch => ({
    requestLogin: (data, props) => dispatch(requestLogin(data, props)),
})
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)