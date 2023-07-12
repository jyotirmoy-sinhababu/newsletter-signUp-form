import React, { useState } from 'react';

import './formCompStyle.css';

import { useNavigate } from 'react-router-dom';

import success from '../../assests/img/icon-success.svg';

const FormComp = () => {
  const navigate = useNavigate();

  const [emailAdd, setEmailAdd] = useState({});
  const [err, setErr] = useState();

  const handleChange = (e) => {
    setEmailAdd({ ...emailAdd, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(emailAdd.email)) {
      setErr('valid email required');
    } else {
      navigate('/next');
    }
  };

  return (
    <div className='formComp-cnt'>
      <div className='formComp-header-cnt'>
        <h1 className='header'>Stay updated!</h1>
        <p className='text'>
          {' '}
          Join 60,000+ product managers receiving monthly updates on:
        </p>
      </div>
      <div className=' formComp-txt-cnt'>
        <div className=' formComp-subTxt-cnt'>
          <img className='img' src={success} alt='' />
          <p className='text'> Product discovery and building what matters</p>
        </div>
        <div className=' formComp-subTxt-cnt'>
          <img className='img' src={success} alt='' />
          <p className='text'> Measuring to ensure updates are a success</p>
        </div>
        <div className=' formComp-subTxt-cnt'>
          <img className='img' src={success} alt='' />
          <p className='text'> And much more!</p>
        </div>
      </div>
      <div className='form-cnt'>
        <label className='text email'>Email address</label>
        <form className='form'>
          <input type='text' className='inputField' />
        </form>
        {err ? <p className='err'>{err}</p> : null}

        <button onClick={handleSubmit} className='btn'>
          Subscribe to monthly newsletter
        </button>
      </div>
    </div>
  );
};

export default FormComp;
