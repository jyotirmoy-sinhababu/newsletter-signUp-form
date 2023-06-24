import React from 'react';

import './home.css';

import FormComp from '../../components/form/FormComp';
import ImgComp from '../../components/imgSection/ImgComp';

const Home = () => {
  return (
    <div className='home-cnt'>
      <FormComp />
      <ImgComp />
    </div>
  );
};

export default Home;
