import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xknkbjkz");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <div className='col-md-6'>
      <form onSubmit={handleSubmit}>
    <div className='row form-group'>
    <div className='col'>
      <label htmlFor="email">
        Email Address
      </label>
      <input className="form-control"
        id="email"
        type="email" 
        name="email"
        placeholder='Email Address'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      </div>
      <div className='col'>
      <textarea className='form-control'
        id="message"
        name="message"
        placeholder="Please submit any requests"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
       </div>
       </div>
       <div className='form-group buttons' >
      <button type="submit" className='btn btn-light' disabled={state.submitting}>
        Submit
      </button>
      </div>
    </form>
    </div>
  )
  }
  export default ContactForm