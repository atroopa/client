import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

const PageOne = () => <div>Home</div>;
const PageTwo = () => <div>About</div>;
const PageThree = () => <div>Contact</div>;




function App() {
  return (
    <div>

      <p className='px-20 text-blue-700 text-4xl font-sans'>
        <Link to= "/">Home</Link>
        &nbsp; &nbsp; &nbsp;
        <Link to= "/about">About</Link>
        &nbsp; &nbsp; &nbsp;
        <Link to= "/contact">Contact</Link>
        &nbsp; &nbsp; &nbsp;
      </p>
    
      <Routes>
        <Route exact path='/' element={<PageOne/>} />
        <Route path='/about' element={<PageTwo/>} />
        <Route path='/contact' element={<PageThree/>} />
      </Routes>
    </div>
  );
}

export default App;