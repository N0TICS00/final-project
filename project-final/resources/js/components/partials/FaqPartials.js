import React from 'react';



function FaqPartial (){

        return(
            <div>

<title>FAQ</title>

<section id="faq">
<section id="modules">
<h1>Frequently Asked Question</h1>
<div class="accordion-div">
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Who should take an online course?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <p>Students join our online courses for a variety of reasons and come from diverse backgrounds, professions, and age groups. With online courses, you can:
        <ul>
            <li>Advance your skill-set or begin a career change.
            </li>
            <li>Take the next step in your formal education.</li>
            <li>Ease the transition before entering a full-time academic program.</li>
            <li>Enjoy learning a new topic.</li>
        </ul></p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Are there prerequisites or language requirements?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>There are no prerequisites. Our courses are open to students of all backgrounds who are 18 years of age and older.
        All courses are conducted in English.Discussion boards are a critical component of each of our courses; therefore, we suggest students have a conversational knowledge of English when pursuing a Certificate of Completion. For any of the art writing courses, students need to be 100% proficient in written English.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Can I take more than one course at a time?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       <p>If you are new to online learning, we recommend that you begin with one course. As our courses are offered frequently throughout the year, you can always come back and continue your studies with one or more topics.</p>
      </div>
    </div>
  </div>
</div>
</div>
</section>
</section>
 
            </div>
            
        )
    }


export default FaqPartial;