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
            return <li key={course.id}><p>{course.name}</p> <button onClick={()=>this.deleteCourse(course.id)}>Delete</button></li>
        })
    }
    
    render(){

        return(
            <div>
                <ul>
                    {this.renderProducts()}
                </ul>
            </div>
        )
    }
}

if (document.getElementById('courses')) {
    ReactDOM.render(<Courses />, document.getElementById('courses'));
}