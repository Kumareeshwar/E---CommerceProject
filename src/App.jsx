import React from 'react';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Checkout from './Pages/Checkout/Checkout';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import { StateProvider } from './components/StateProvider/StateProvider';
import { initialState,reducer } from './components/StateProvider/reducer';

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      <StateProvider initialState={initialState} reducer={reducer}>
      
      {location.pathname !== '/login' && <Header />}
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
      </StateProvider>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;

