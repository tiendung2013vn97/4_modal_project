import React from 'react'
import { Table, Button } from 'antd'
import { connect } from 'react-redux'
import { logoutUser, getUsers } from '../actions/UsersAction'

const users = [
    {
        name: 'asdasdas asdas',
        age: '123',
        address: 'asdaad awdawd'
    },
    {
        name: 'asdasdas asdas',
        age: '123',
        address: 'asdaad awdawd'
    },
    {
        name: 'asdasdas asdas',
        age: '123',
        address: 'asdaad awdawd'
    }
]

class UserManagement extends React.Component {
    componentWillMount() {
        this.props.getUsers()
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
    }
    renderUsers = (users) => {
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
            },
        ]
        return <Table
            dataSource={users}
            columns={columns}
        />
    }

    render() {
        return (
            <div>
                <h1>Users management</h1>
                {
                    this.renderUsers(users)
                }
                <Button
                    type="danger" ghost
                    onClick={() => this.props.getUsers()}
                    style={{
                        position: 'absolute',
                        top: '20px',
                        left: '10px'
                    }}>Refresh</Button>
            </div>
        )
    }

}


const mapStatetoProps = state => {
    return {
        ...state.UsersReducers
    }

}

const mapDispatchToProps = dispatch => ({
    logoutUser: (props) => dispatch(logoutUser(props)),
    getUsers: () => dispatch(getUsers()),

})
export default connect(mapStatetoProps, mapDispatchToProps)(UserManagement)


