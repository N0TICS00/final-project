import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');
class Users extends React.Component{
    constructor(){
        super();
        this.state={
            users: []
        }
    }
    componentDidMount(){
        axios.get('/api/users').then(response=>{
            this.setState({users: response.data})
            
        })
    }   
    deleteUser(id){

        axios.delete(`api/users/${id}`).then(response=>{
            console.log(response)
            window.location.reload(false);
          }).catch(err=>{
            console.log(err)
          })
    }
    renderProducts(){
        return this.state.users.map(user=>{
            return <li key={user.id}><p>{user.name}</p> <button onClick={()=>this.deleteUser(user.id)}>Delete</button></li>
        })
    }
    render(){

        return(
            <div>
                <ul>
                    {this.renderProducts()}
                </ul>
            </div>
        )
    }
}

if (document.getElementById('users')) {
    ReactDOM.render(<Users />, document.getElementById('users'));
}