import React from 'react';

import success from '../../assests/img/icon-success.svg';

const Success = () => {
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
        <button>Dismiss message</button>
      </div>
    </div>
  );
};

export default Success;
