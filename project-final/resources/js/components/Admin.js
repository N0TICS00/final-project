import React from 'react';
import ReactDOM from 'react-dom';
import AdminPartial from './partials/AdminPartials';

function Admin (){
   
      return (
        <div className="App">
           <AdminPartial/>

        </div>
      );
    
}

if (document.getElementById('admin')) {
    ReactDOM.render(<Admin/>, document.getElementById('admin'));
}