import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');
class Courses extends React.Component{
    constructor(){
        super();
        this.state={
            courses: []
        }
    }
    componentDidMount(){
        axios.get('/api/courses').then(response=>{
            this.setState({courses: response.data})
            
        })
    }   
    deleteCourse(id){
        axios.delete(`api/courses/${id}`).then(response=>{
            console.log(response)
            window.location.reload(false);
          }).catch(err=>{
            console.log(err)
          })
    }
    renderProducts(){
        return this.state.courses.map(course=>{
            return <li key={course.id}><p>Name: {course.name}</p><p>Description: {course.description}</p> <p>Creator: {course.creator}</p></li>
        })
    }
    
    render(){

        return(
            <div>
                <ol>
                    {this.renderProducts()}
                </ol>
            </div>
        )
    }
}

if (document.getElementById('list')) {
    ReactDOM.render(<Courses />, document.getElementById('list'));
}