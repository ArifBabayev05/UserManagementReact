import React, { Component } from 'react'

class AddUser extends Component {
    state = {
        visible: false,
        name: "",
        surname: "",
        age: "",
    }

    changeVisibility = (e) => {
        this.setState({
            visible: !this.state.visible
        })
    }

    onClickEvent = (e) => {
        this.setState({
            visible: !this.state.visible
        })

    }
    changeName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    changeSurname=(e)=>{
        this.setState({
            surname:e.target.value
        })
    }
    changeAge=(e)=>{
        this.setState({
            age:e.target.value
        })
    }

    addUser=(e)=>{
        e.preventDefault();
        const{name,surname,age}=this.state;

        const newUser={
            name,
            surname,
            age
        }
        console.log(newUser);
    }

    render() {
        const { visible, name, surname, age } = this.state;
        return (
            <div>
                <div className="col-md-8 mb-4">
                    <div onClick={this.onClickEvent}>
                        <button onClick={this.changeVisibility} className='btn btn-dark btn-block mb-2'>{visible ? "Hide Form" : "Show Form"}</button>

                    </div>
                    {
                        visible ? <div className="card">
                            <div className="card-header">
                                <h4>Add User Form</h4>
                            </div>

                            <div className='card-body'>
                                <form onSubmit={this.addUser}>
                                    <div className='form-group'></div>
                                        <label htmlFor='name'>Name</label>
                                        <input
                                        type="text"
                                        name="name"
                                        id="id"
                                        placeholder="Enter Name"
                                        className="form-control mb-3" 
                                        value={name}
                                        onChange={this.changeName}
                                        />
                                    <div className='form-group'></div>
                                    <label htmlFor='surname'>Surname</label>
                                    <input
                                        type="text"
                                        surname="surname"
                                        id="surname"
                                        placeholder="Enter Surname"
                                        className="form-control mb-3"
                                        value={surname}
                                        onChange={this.changeSurname}

                                        />
                                    <div className='form-group'></div>
                                    <label htmlFor='age'>Age</label>
                                    <input
                                        type="text"
                                        age="age"
                                        id="age"
                                        placeholder="Enter Age"
                                        className="form-control mb-3"
                                        value={age}
                                        onChange={this.changeAge}

                                        />

                                </form>
                            </div>

                            <button className='btn btn-danger btn-block' type='submit'>Add User</button>
                        </div> : null
                    }
                </div>
            </div>
        )
    }
}
export default AddUser;
