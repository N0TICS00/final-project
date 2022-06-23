import React from 'react';
import ReactDOM from 'react-dom';

const axios = require('axios');
function LoginPartial (){
    const [state, setState] = React.useState({

        email: "",
        password:"",
      });
    const [error, setError] = React.useState({
        message:""
    })

      function handleChange(event) {
        const value = event.target.value;
        setState({
          ...state,
          [event.target.name]: value,
        });
        console.log(state)
       
      }
      function handleSubmit(event){
        console.log(state.email, state.password)
        axios.post('api/users/login',{
            email: state.email,
            password: state.password
        }).then(
            response=>{
                console.log(response.data.user.name)
                localStorage.setItem('user', response.data.user.name)
                document.location.href = '/courses/'

            }
        )
        event.preventDefault()
    
      }
    


        return(
            <div>
                <div class="login">
                    <section id="form">
                        <h1>Login to our platform</h1>
                        <div class="form-div">
                        <form onSubmit={handleSubmit} method="POST">
                                <p>
                                    <label>
                                        <h5>Email</h5>
                                        <input type="email" name="email" class="form" onChange={handleChange} required/>
                                    </label>
                                </p>
                            <p>
                                <label>
                                    <h5>Password</h5>
                                    <input type="password" name="password" class="form" onChange={handleChange}  required/>
                                </label>
                            </p>
                            <div class="buttons">
                                <p>
                                    <button type="submit" class="btn" onClick={handleSubmit}>Login</button>
                                    <p>or</p>
                                    <a href="/">Back to Home</a>
                                </p>
                            </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        )
    }


export default LoginPartial;