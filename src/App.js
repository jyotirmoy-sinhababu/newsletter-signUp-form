import './App.css';

import { Route, Routes } from 'react-router-dom';

import Home from './page/home/Home';
import Success from './page/success/Success';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<Home />} />
          <Route path='/success' element={<Success />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
