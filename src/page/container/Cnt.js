import React from 'react';
import { Outlet } from 'react-router-dom';

const Cnt = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Cnt;
