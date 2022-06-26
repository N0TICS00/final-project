import { InlineWidget } from "react-calendly";
import skyscraper from "../../../img/skyscraper.jpg";
import teacher from "../../../img/teacher.jpg";
import React from 'react';

const axios = require('axios');
function HomePartial() {
    const [state, setState] = React.useState({
        name: "",
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
        function setCookie(name,value,days){
            var expires = "";
            if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
            }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
        }
        console.log(state)
        axios.post('api/users',{
            name: state.name,
            email: state.email,
            password: state.password
        }).then((response)=>{
            console.log(response.data)
            localStorage.setItem('user', response.data.name)
            let user = localStorage.getItem('user')
            setCookie('user', user, 1)
            document.location.href = '/courses/'
            
        }).catch((err)=>{
            console.log(err)
            setError(err)
        })
        event.preventDefault()
      }
    return(
        
        <div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script> 
                <title>Home</title>
                <section id="home-page">
                    <nav className="navbar ">
                        <div className="container">
                            <a className="navbar-brand align-middle" href="/">
                                dag's tech
                            </a>
                        </div>
                    </nav>
                    <h1>Choose us for your formation</h1>
                    <a className="btn button btn-lg" href="#form">Sign Up</a>
                    
                </section>
                <section id="story">
                    <h1>Our Story</h1>
                    <div className="story-img-div">
                    <img src={skyscraper} alt="SkyScraper" className="story-img"/>
                    </div>
                        <p>Our company was founded in 2015 to meet people’s need to learn the skills they need to make a career in the web world. Our founder, teacher Morrison, has decades of experience in web development and web application management. Our goal, in addition to teaching skills, is to bring people together to help each other in their work.</p>
                </section>
                <section id="experience">
                <h1>An experience that changes your life</h1>
                    <div className="list">
    <div className="list-item">
      <ion-icon name="laptop-outline" className="icon"></ion-icon> <p>Thanks to our courses, which will give you a solid foundation, you can aim for positions as a Junior Developer.</p>
    </div>
    <div className="list-item">
      <ion-icon name="briefcase-outline"className="icon"></ion-icon >
      <p>Our courses and related projects are job-oriented that will make you more attractive to companies.</p>
    </div>
    <div className="list-item">
      <ion-icon name="videocam-outline" className="icon"></ion-icon>
      <p>At the end of the course, there will be a special course for alumni that will consist in finding a job suitable for the skills developed and the goals of the person.</p>
    </div>
  </div>

</section>
<section className="courses">
    <h1>Our Courses</h1>
    <div className="cards">
    <div className="card" >
        <div className="card-img-top" id="first-image">
        </div>
        <div className="card-body">
            <h5 className="card-title"><b>HTML & CSS</b></h5>
            <p className="card-text"><strong>WHAT ARE HTML & CSS? </strong> <br/> 
            They are the basis of the internet, everything you can find on the sites has been done with them. If you want to learn these superpowers, you are in the right place! They are the basis of the internet, everything you can find on the sites has been done with them.<br/>
            <strong>3 REASON TO LEARN HTML & CSS</strong>
            <ul>
                <li>Web development is one of the most future-proof and highest-paying industries in the world. And HTML and CSS is the entry point to this world!</li>
                <li>Used in every sites of every Companies.</li>
                <li>Creative Work with them and their framework such as Bootstrap.</li>

            </ul>
            <a className="btn" href="/roadmap/1">Course's Roadmap</a>
        </p>
        </div>
    </div>
    <div className="card">
        <div className="card-img-top" id="second-image">
        </div>
        <div className="card-body">
        <h5 className="card-title"><b>JavaScript Basics</b></h5>
            <p className="card-text"><strong>WHAT IS JAVASCRIPT? </strong><br/>JavaScript is one of the most popular programming languages in the world, and growing faster than any other programming language. As a developer, you can use JavaScript to build web and mobile apps, real-time networking apps, command-line tools, and games.<br/>
            <strong>4 REASONS TO LEARN JAVASCRIPT </strong>
            <ul>
                <li>JavaScript is a key tool for front-end, back-end, and full-stack developers.</li>
                <li>The average annual salary for a JavaScript developer is $72,000.</li>
                <li>Companies like Walmart, Netflix, and PayPal run big internal applications around JavaScript.</li>
                <li>Having strong JavaScript knowledge will help you land your dream job.</li>
            </ul>

        </p>
        <a className="btn" href="/roadmap/2">Course's roadmap</a>
        </div>
    </div>
    </div>
</section>
<section id="teacher">
    <h1>Meet the teacher</h1>
    <div className="teacher">
        <img className="teacher-img" src={teacher} alt="Warren Morrison"/>
        <h3>Warren Morrison</h3>
        <p className="teacher-p">Warren Morrison was born in 7/5/1970 in London.
            He discovered a passion for programming when he was 13. He attended Computer Science and got a job at Centure Inc. At the age of 25 he became Senior Full Stack Developer at the Renesas Company and thanks to this work he was able to find new stimuli, so much so that he could register a course.</p>
        
        
    </div>
</section>
<section id="booking">
    <div>
        <h1>Book a call with Mr. Morrison</h1>
    <InlineWidget url="https://calendly.com/notics-pro/30min" />
    </div>
</section>
<section id="form">
    <h1>Subscribe to our platform </h1>
    <div className="form-div">
        {
            (error.message !== "") ? <h4>There's an error. Try again!</h4> : <div></div>
        }
        <form onSubmit={handleSubmit} method="POST">

            <p>
            <label>
                <h5>Name</h5>
                <input 
                type="text" 
                name="name" 
                className="form" 
                onChange={handleChange} 
                value={state.name} 
                required/>
            </label>
            </p>
            <p>
            <label>
                <h5>Email</h5>
                <input
                 type="email" 
                 name="email" 
                 className="form" 
                 onChange={handleChange} 
                 value={state.email} 
                 required/>
            </label>
            </p>
            <p>
            <label>
                <h5>Password</h5>
                <input 
                type="password" 
                name="password" 
                className="form" 
                onChange={handleChange} 
                value={state.password} 
                required/>
            </label>
            
            </p>
            <div className="buttons">
            <p>
            <button type="submit" className="btn">Sign Up</button>
            <p>or</p>
            <a href="/login">Login</a>
            </p>
            </div>
        </form>
    </div>
</section>

</div>

    )
 
}
export default HomePartial;