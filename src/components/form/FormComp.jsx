import React from 'react';

import success from '../../assests/img/icon-success.svg';

const FormComp = () => {
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
        <form>
          <label form='html'>Email Address</label>
          <input
            type='email'
            name='email'
            className='email'
            placeholder='email@company.com'
          />
        </form>
      </div>
    </div>
  );
};

export default FormComp;
