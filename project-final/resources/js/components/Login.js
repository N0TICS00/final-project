import React from 'react';
import ReactDOM from 'react-dom';
import LoginPartial from './partials/LoginPartials';
const axios = require('axios');
function Login (){
   
      return (
        <div className="App">
           <LoginPartial/>

        </div>
      );
    
}

if (document.getElementById('login')) {
    ReactDOM.render(<Login/>, document.getElementById('login'));
}