import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import CamperDetails from './pages/CamperDetails/CamperDetails';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<CamperDetails />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
