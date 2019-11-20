import React from 'react'
import { connect } from 'react-redux'
import RegistrationForm from '../components/RegistrationForm'
import { requestRegister } from '../actions/UserAction'
class RegistrationPage extends React.Component {
  
    handleSubmitForm = e => {
        this.props.requestRegister(e, this.props)
    }
    render() {
        return (
            <RegistrationForm
                handleSubmitForm={(e) => this.handleSubmitForm(e)}
                {...this.props}
            />
        )
    }
}


const mapStateToProps = state => {
    return {
        ...state.UserReducers,
    }
}

const mapDispatchToProps = dispatch => ({
    requestRegister: (data, props) => dispatch(requestRegister(data, props)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage)