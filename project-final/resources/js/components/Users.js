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
    renderProducts(){
        return this.state.users.map(user=>{
            return <li key={user.id}>{user.name}</li>
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