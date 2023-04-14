import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

const pageOne = () => {
  return(
    <div>
      page one
    </div>
  );
}


const pageTwo = () => {
  return(
    <div>
      page two
    </div>
  );
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path='/' exact Component={pageOne} />
        <Route path='/about' Component={pageTwo} />
      </BrowserRouter>
    </div>
  )
};

export default App;
