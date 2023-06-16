import React, { useState } from 'react';

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
    <div>
      <div>
        <div>
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
        </div>
        <div>
          <div>
            <img src={success} alt='' />
            <p>Product discovery and building what matters</p>
          </div>
          <div>
            <img src={success} alt='' />
            <p>Measuring to ensure updates are a success</p>
          </div>
          <div>
            <img src={success} alt='' />
            <p> And much more!</p>
          </div>
        </div>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div>
            <label form='html'>Email Address</label>
            {err.empty ? <p>{err.empty}</p> : null}
            {err.wrongFormat ? <p>{err.wrongFormat}</p> : null}
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
