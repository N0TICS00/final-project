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
    renderProducts(){
        return this.state.courses.map(course=>{
            return <li key={course.id}>{course.name}</li>
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