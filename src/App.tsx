import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './Routes';
import './App.css';

import MainLayout from './Layout/MainLayout/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<MainLayout />}>
        {routes.map((route)=> {
          return(
            <Route 
              path={route.path}
              element={route.element}
              key={route.path}
            />
          )
        })}
      </Route>
      </Routes>
    </BrowserRouter>
  );
   
}

export default App;
