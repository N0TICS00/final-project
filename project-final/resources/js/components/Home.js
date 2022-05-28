import React from 'react';
import ReactDOM from 'react-dom';
import HomePartial from './partials/HomePartials';
const axios = require('axios');
function Home (){
    const [state, setState] = React.useState({
        name: "",
        email: "",
        password:"",
      });
    
      function handleChange(event) {
        const value = event.target.value;
        setState({
          ...state,
          [event.target.name]: value,
        });
       
      }
      function handleSubmit(event){
        console.log(state)
        axios.post('api/users',{
            name: state.name,
            email: state.email,
            password: state.password
        }).then((response)=>{
            console.log(response)
        }).catch((err)=>{
            console.log(err)
        })
        event.preventDefault()
      }
      return (
        <div className="App">
           <HomePartial/>

        </div>
      );
    
}

if (document.getElementById('home')) {
    ReactDOM.render(<Home/>, document.getElementById('home'));
}