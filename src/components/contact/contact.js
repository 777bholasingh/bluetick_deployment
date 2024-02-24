import React from 'react'
import './contact.css'
// creating functional component "let's connect" section
export default function Contact() {
  return (
    <>

<section className='contact-section ms-2'id="connect">

<div className='contact-container'>

      <div className='contact-item'>
        <h3>Let's Connect</h3>
        <p>Connect to our support team or make an appointment to our experts</p>
      </div>

      <form class="row g-3">

         <div class="col-md-4 col-sm-12">
          <label for="inputPassword4" class="form-label">Fullname<span >*</span></label>
        <input type="text" class="form-control" id="inputFullname"   required />
          </div>    

         <div class="col-md-4 col-sm-12">
            <label for="inputEmail4" class="form-label">Email<span >*</span></label>
             <input type="email" class="form-control" id="inputEmail4"  required  />
         </div>


         <div class="col-md-4 col-sm-12">
               <label for="inputPassword4" class="form-label">Contact Number<span >*</span></label>
               <input type="number" class="form-control" id="inputContactnumber"  required />
         </div>

         <div class="col-12">
             <label for="inputsubject" class="form-label">Subject <span >*</span></label>
              <input type="text" class="form-control" id="inputSubject" placeholder="subject" required />
         </div>
 
         <div class="col-12">
            <label for="inputCity" class="form-label">Message<span >*</span></label>
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
          </div>
 
         <div class="col-12">
             <button className='button' >Send Message</button>
          </div>

      </form>



</div>  

</section>

    </>
  );
}

