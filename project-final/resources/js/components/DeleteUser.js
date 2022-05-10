import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');
function DeleteUser (){
    const [state, setState] = React.useState({
        value:[]
      });
    
      function handleChange(event) {
        const value = event.target.value;
        setState({
          ...state,
          [event.target.name]: value,
        });
       
      }
      function handleSubmit(event){
        console.log(event.target.value.id)
       /* axios.delete(`api/users/${event.target.value.id}`).then(response=>{
          console.log(response)
        }).catch(err=>{
          console.log(err)
        })*/
        event.preventDefault()
      }
      return (
        <div className="App">
          <form onSubmit={handleSubmit}>
            <label>
              ID
              <input
                type="number"
                name="name"
                value={state.id}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Submit</button>
        </form>

        </div>
      );
    
}

if (document.getElementById('delete-user')) {
    ReactDOM.render(<DeleteUser/>, document.getElementById('delete-user'));
}