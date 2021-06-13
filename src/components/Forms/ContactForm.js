import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xknkbjkz");
  if (state.succeeded) {
      return <p>Thanks for Submitting your request</p>;
  }
  return (
    <div className='inquiryForm col-md-6'>
    <h2>Request/Inquiries Form:</h2>
    <form onSubmit={handleSubmit} className='form'>
    <div className='form-group'>
    <div className='col'>
      <input className="form-control" id="email" type="email" name="email" placeholder='Email Address' />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className='col'>
      <textarea className='form-control' id="message" name="message" placeholder="Please submit any requests/inquiries"/>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
       </div>
       </div>
       <div className='form-group buttons' >
      <button type="submit" className='btn btn-light' disabled={state.submitting}>
          Submit Request
      </button>
      </div>
    </form>
    </div>
  )
  }
  export default ContactForm