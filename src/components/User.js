import React, { Component } from 'react'
import PropTypes from 'prop-types'




class User extends Component {
    static defaultProps = {
        name: "Unknown",
        surname: "Unknown",
        age: "Unknown",
    }
    state = {
        isVisible: false
    }
    onClickEvent = (e) => {
        this.setState({
            isVisible: !this.state.isVisible,

        })

    }


    render() {
        //Destructing
        const { name, surname, age } = this.props;
        const { isVisible } = this.state;

        return (

            <div className='col-md-8 mb-4'>
                <div className='card' style={isVisible ? { backgroundColor: "#92A289", color: 'white' } : null}>
                    <div className='card-header d-flex justify-content-between'>
                        <h4 className='d-inline' style={{ cursor: "pointer" }} onClick={this.onClickEvent}>{name} </h4>
                        <i className="far fa-trash-alt mt-2" onClick={this.deleteUser} style={{ cursor: "pointer",color:"red" }}></i>
                    </div>

                    {
                        isVisible ? <div className='card-body'>
                            <p className='card-text'>Surname: {surname}</p>
                            <p className='card-text'>Age: {age}</p>
                            <p>{this.state.test} </p>
                        </div> : null
                    }

                </div>


            </div>
        )
    }
}
User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired
}

export default User;
