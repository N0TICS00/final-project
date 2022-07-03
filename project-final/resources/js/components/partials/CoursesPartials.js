import React from 'react';

function CoursesPartial (){

    


        return(
            <div>
                <section id="navbar">
<nav class="navbar navbar-dark navbar-expand-lg">
  <div class="container-fluid container">
    <a class="navbar-brand user-name ">Hi,  {localStorage.getItem('user')}
    
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse items" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="/courses"><ion-icon name="videocam-outline"></ion-icon> Our courses</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/faq"><ion-icon name="chatbox-ellipses-outline"></ion-icon> FAQ</a>
        </li>
        <li class="nav-item">
          <form>
            <a class="nav-link" href="/logout"><ion-icon name="exit-outline"></ion-icon> Log Out</a>
          </form>
        </li>
        </ul>
    </div>
  </div>
</nav>
</section>
<title>Courses</title>
<section class="courses">
    <h1>Our Courses</h1>
    <div class="cards">
    <div class="card">
        <div class="card-img-top" id="first-image">
        </div>
        <div class="card-body">
            <h5 class="card-title"><b>HTML & CSS</b></h5>
            <p class="card-text"><strong>WHAT ARE HTML & CSS? </strong> <br/>
            They are the basis of the internet, everything you can find on the sites has been done with them. If you want to learn these superpowers, you are in the right place! They are the basis of the internet, everything you can find on the sites has been done with them.<br/>
            <strong>3 REASON TO LEARN HTML & CSS</strong>
            <ul>
                <li>Web development is one of the most future-proof and highest-paying industries in the world. And HTML and CSS is the entry point to this world!</li>
                <li>Used in every sites of every Companies.</li>
                <li>Creative Work with them and their framework such as Bootstrap.</li>

            </ul>
            </p>
            
    </div>
    </div>
    
    <div class="card" >
        <div class="card-img-top" id="second-image">
        </div>
        <div class="card-body">
        <h5 class="card-title"><b>JavaScript Basics</b></h5>
            <p class="card-text"><strong>WHAT IS JAVASCRIPT? </strong><br/>JavaScript is one of the most popular programming languages in the world, and growing faster than any other programming language. As a developer, you can use JavaScript to build web and mobile apps, real-time networking apps, command-line tools, and games.<br/>
            <strong>4 REASONS TO LEARN JAVASCRIPT </strong>
            <ul>
                <li>JavaScript is a key tool for front-end, back-end, and full-stack developers.</li>
                <li>The average annual salary for a JavaScript developer is $72,000.</li>
                <li>Companies like Walmart, Netflix, and PayPal run big internal applications around JavaScript.</li>
                <li>Having strong JavaScript knowledge will help you land your dream job.</li>
            </ul>
</p>
            

 

    </div>
    </div>


            </div>
            </section>
            </div>
            
        )
    }


export default CoursesPartial;