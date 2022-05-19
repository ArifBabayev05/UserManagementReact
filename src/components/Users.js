import React, { Component } from 'react'
import User from './User'

class Users extends Component {

    render() {
        const { users } = this.props;
        console.log(users);
        return (
            <div>
                {
                users.map(user =>{
                    return(
                        <User
                        key={user.id}
                    name={user.name}
                    surname={user.surname}
                    age={user.age}
                    />
                    )
                })
                }

            </div>
        )
    }
}
export default Users;