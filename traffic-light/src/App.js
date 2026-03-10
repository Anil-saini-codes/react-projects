import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentLight, setCurrentLight] = useState('red');

  const lights = ['red', 'yellow', 'green'];
  const timings = { red: 9000, yellow: 4000, green: 12000 };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentLight((prevLight) => {
        const currentIndex = lights.indexOf(prevLight);
        const nextIndex = (currentIndex + 1) % lights.length;
        return lights[nextIndex];
      });
    }, timings[currentLight]);

    return () => clearTimeout(timer);
  }, [currentLight]);

  return (
    <div className="App">
      <div className="traffic-light-container">
        <h1>Traffic Light</h1>
        <div className="traffic-light">
          <div className={`light red ${currentLight === 'red' ? 'active' : ''}`}></div>
          <div className={`light yellow ${currentLight === 'yellow' ? 'active' : ''}`}></div>
          <div className={`light green ${currentLight === 'green' ? 'active' : ''}`}></div>
        </div>
        <p className="status">Current Light: <strong>{currentLight.toUpperCase()}</strong></p>
      </div>
    </div>
  );
}

export default App;
