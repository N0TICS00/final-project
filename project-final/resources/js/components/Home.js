import React from 'react';
import ReactDOM from 'react-dom';
import HomePartial from './partials/HomePartials';
const axios = require('axios');
function Home (){
   
      return (
        <div className="App">
           <HomePartial/>

        </div>
      );
    
}

if (document.getElementById('home')) {
    ReactDOM.render(<Home/>, document.getElementById('home'));
}