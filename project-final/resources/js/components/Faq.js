import React from 'react';
import ReactDOM from 'react-dom';
import FaqPartial from './partials/FaqPartials';
const axios = require('axios');
function Faq (){
   
      return (
        <div className="App">
           <FaqPartial/>

        </div>
      );
    
}

if (document.getElementById('faq')) {
    ReactDOM.render(<Faq/>, document.getElementById('faq'));
}