import React from 'react';
import { useNavigate } from 'react-router-dom';

import success from '../../assests/img/icon-success.svg';

const Success = () => {
  const handleClick = () => {
    navigate('/home');
  };

  const navigate = useNavigate();
  return (
    <div>
      <div>
        <img src={success} alt='' />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to ash@loremcompany.com. Please
          open it and click the button inside to confirm your subscription.
        </p>
      </div>
      <div>
        <button onClick={handleClick}>Dismiss message</button>
      </div>
    </div>
  );
};

export default Success;
