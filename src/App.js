import './App.css';

import { Route, Routes } from 'react-router-dom';

import Home from './page/home/Home';
import Success from './page/success/Success';
import Cnt from './page/container/Cnt';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Cnt />}>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/next' element={<Success />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
