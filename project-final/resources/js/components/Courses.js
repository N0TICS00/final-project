import React from 'react';
import ReactDOM from 'react-dom';
import CoursesPartial from './partials/CoursesPartials';
const axios = require('axios');
function Courses (){
   
      return (
        <div className="App">
           <CoursesPartial/>

        </div>
      );
    
}

if (document.getElementById('courses')) {
    ReactDOM.render(<Courses/>, document.getElementById('courses'));
}