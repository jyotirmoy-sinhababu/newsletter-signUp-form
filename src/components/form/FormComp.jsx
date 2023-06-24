import React, { useState } from 'react';

import './formCompStyle.css';

import { useNavigate } from 'react-router-dom';

import success from '../../assests/img/icon-success.svg';

const FormComp = () => {
  const navigate = useNavigate();

  const [emailAdd, setEmailAdd] = useState({});
  const [err, setErr] = useState({ empty: '', wrongFormat: '' });

  const handleChange = (e) => {
    setEmailAdd({ ...emailAdd, [e.target.name]: e.target.value });
  };
  console.log(emailAdd);

  const handleSubmit = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailAdd) {
      setErr({ ...err, empty: 'please enter your email' });
    } else if (!emailRegex.test(emailAdd.email)) {
      setErr({ ...err, wrongFormat: 'valid email required' });
    } else {
      console.log('done');
      navigate('/next');
    }
  };

  return (
    <div className='formComp-cnt'>
      <div className='formComp-txt-cnt'>
        <div className='formComp-intro-cnt'>
          <h1 className='formComp-intro-header'>Stay updated!</h1>
          <p className='formComp-intro-para'>
            Join 60,000+ product managers receiving monthly updates on:
          </p>
        </div>
        <div>
          <div className='formComp-small'>
            <img className='img' src={success} alt='' />
            <p className='txt'>Product discovery and building what matters</p>
          </div>
          <div className='formComp-small'>
            <img className='img' src={success} alt='' />
            <p className='txt'>Measuring to ensure updates are a success</p>
          </div>
          <div className='formComp-small'>
            <img className='img' src={success} alt='' />
            <p className='txt'> And much more!</p>
          </div>
        </div>
      </div>
      <div className='formComp-form-cnt'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className='formComp-form '
        >
          <div className='form-err-cnt'>
            <label form='html'>Email Address</label>
            {err.empty ? <p className='err'>{err.empty}</p> : null}
            {err.wrongFormat ? <p className='err'>{err.wrongFormat}</p> : null}
          </div>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            type='text'
            name='email'
            className='email'
            placeholder='email@company.com'
          />
          <button className='frm-btn' type='submit'>
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormComp;
