import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');
function Create (){
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
        axios.post('/api/users',{
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
          <form onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={state.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Email
              <input
                type="text"
                name="email"
                value={state.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Password
              <input
                type="text"
                name="password"
                value={state.password}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Submit</button>
        </form>

        </div>
      );
    
}

if (document.getElementById('create')) {
    ReactDOM.render(<Create/>, document.getElementById('create'));
}