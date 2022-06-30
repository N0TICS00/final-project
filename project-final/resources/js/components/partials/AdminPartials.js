import React from 'react';
const axios = require("axios")
function AdminPartial (){

    
    const [state, setState] = React.useState({
        name:"",
        description:"",
        creator:"",
      });
     

    
      function handleChange(event) {
        const value = event.target.value;
        setState({
          ...state,
          [event.target.name]: value,
        });
        console.log(state)
       
      }
      function handleSubmit(event){
        axios.post('/api/courses',{
            name: state.name,
            description: state.description,
            creator: state.creator,
        }).then(response=>{
            console.log(response.data)
            document.location.href = '/api/courses'

        })

        event.preventDefault()
    
      }
    

        return(
            <div> 
                
                <form onSubmit={handleSubmit} className="form-admin">
                    <p><input type="text" placeholder='Insert course name' name="name" onChange={handleChange} required/></p>
                    <p><input type="text" placeholder='Insert description' name="description" onChange={handleChange} required/></p>
                    <p><input type="text" placeholder="Insert creator" name="creator" onChange={handleChange} required/></p>
                    <button class="button" type="submit">Submit</button>
                </form>
            </div>
            
        )
    }


export default AdminPartial;