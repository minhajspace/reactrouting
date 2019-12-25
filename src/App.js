import React from 'react';

import './App.css';
import Pageone from './Pageone';
import Pagetwo from './Pagetwo';
import Pagethree from './Pagethree';
import Pagefour from './Pagefour';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" />
          <Pageone />
          <Pagetwo />
          <Pagethree />
          <Pagefour />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
