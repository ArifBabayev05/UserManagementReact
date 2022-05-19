import { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Users from './components/Users';
import AddUser from './components/AddUser';

class App extends Component{
  state={
    users:[
      {
        id:1,
        name:"Huseyn",
        surname:"Aliyev",
        age:23

      },
      {
        id:2,
        name:"Ismail",
        surname:"Bakirli",
        age:25

      },
      {
        id:3,
        name:"Jeyhun",
        surname:"Javadov",
        age:20

      },
      {
        id:4,
        name:"Arif",
        surname:"Babayev",
        age:17

      },
      {
        id:5,
        name:"Aysel",
        surname:"Abilova",
        age:22

      },
      {
        id:6,
        name:"Rafet",
        surname:"Hasanov",
        age:17

      },
      {
        id:7,
        name:"Huseyn",
        surname:"Guliyev",
        age:16

      }
    ]
  }
  deleteUser=(id)=>{
    this.setState({
       users:this.state.users.filter(user=>user.id!==id)

    })
   }

  render(){
    return (
      <div className="container mt-3" >
        <Navbar title="Custom Team" />
        <hr />
        <AddUser/>
        <p>Click Names For Get More Infos</p>
        <Users users ={this.state.users}/>
      </div>
    );
  }
}

export default App;
