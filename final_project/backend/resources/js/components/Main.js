import React, { Component , useState} from 'react';
import ReactDOM from 'react-dom';
/* An example React component */
const axios = require('axios');
class Main extends Component {
    constructor() {
        super();
        //Initialize the state in the constructor
       
    }
    /*componentDidMount() is a lifecycle method
     * that gets called after the component is rendered
     */
    componentDidMount() {
        const [users, setUsers] = useState([])
        /* fetch API in action */
        fetch('/api/users').then(response=>{
            return response.json()
        }).then(user=>{
            setUsers(user)
            console.log(users)
        })
            
    }
    renderUsers(){
        return this.users.map(user => {
            return(
                <p>{user}</p>
            )
        })
    }
    
    render() {
        /* Some css code has been removed for brevity */
        return (
            <div>
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        );
    }
}

export default Main;
/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/
if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}