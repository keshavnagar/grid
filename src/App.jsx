// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React, { useState, useEffect } from "react";
import "./App.css"; // Add styles here or link CSS

const App = () => {
  const rows = 15;
  const cols = 20;

  // State for grid and wave position
  const [wave, setWave] = useState({ row: 0, col: 0 });

  // Function to generate the grid
  const generateGrid = () => {
    const grid = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < 20; j++) {
        const isActive = Math.abs(wave.row) + Math.abs(wave.col) <33;
        row.push(
          <div
            key={`${i}-${j}`}
            className={`cell ${isActive ? "active" : ""}`}
            style={{ backgroundColor: isActive ? randomColor() : "#ddd" }}
          ></div>
        );
      }
      grid.push(
        <div key={i} className="row">
          {row}
        </div>
      );
    }
    return grid;
  };

  // Function to update wave position
  useEffect(() => {
    const interval = setInterval(() => {
      setWave((prevWave) => ({
        row: (prevWave.row + 9) % cols,
        col: (prevWave.col + 9) % rows,
      }));
    }, 200);

    return () => clearInterval(interval);
  }, []);

  // Function to generate random color
  const randomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 4)];
    }
    return color;
  };

  return (
    <div className="grid-container">
      {generateGrid()}
    </div>
  );
};

export default App;

// CSS (App.css)
// .grid-container {
//   display: grid;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   gap: 2px;
// }

// .row {
//   display: flex;
// }

// .cell {
//   width: 20px;
//   height: 20px;
//   border: 1px solid #ccc;
//   transition: background-color 0.2s;
// }

// .active {
//   animation: bounce 0.5s ease-in-out infinite;
// }

// @keyframes bounce {
//   0%, 100% {
//     transform: scale(1);
//   }
//   50% {
//     transform: scale(1.2);
//   }
// }
