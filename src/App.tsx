
import './App.css';
import '../assets/font/index.css'

import React from 'react';
import routes from './router/routes';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;