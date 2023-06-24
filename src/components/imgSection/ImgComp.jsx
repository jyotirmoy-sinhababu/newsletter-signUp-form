import React from 'react';
import './imgCompStyle.css';

import signUp from '../../assests/img/illustration-sign-up-desktop.svg';
import mobileImg from '../../assests/img/illustration-sign-up-mobile.svg';

const ImgComp = () => {
  return (
    <div className='main-img-comp'>
      <img className='main-img' src={signUp} alt='' />
      <img className='mobile-img' src={mobileImg} alt='' />
    </div>
  );
};

export default ImgComp;
