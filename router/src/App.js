import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Root from './Root';
import About from './About';

function App() {
  useEffect(() => {
    window.onpopstate = () => {
      window.location.href = window.location.pathname;
    };
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
