import React from 'react';
import ReactDOM from 'react-dom';
import LogoutPartial from './partials/LogoutPartials';
const axios = require('axios');
function Logout (){
   
      return (
        <div className="App">
           <LogoutPartial/>

        </div>
      );
    
}

if (document.getElementById('logout')) {
    ReactDOM.render(<Logout/>, document.getElementById('logout'));
}