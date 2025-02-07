'use client'
import React, { useState } from "react";

const SudokuGrid = () => {
  const [grid, setGrid] = useState(
    Array(9).fill(null).map(() => Array(9).fill(""))
  );

  const handleChange = (row, col, value) => {
    if (/^[1-9]?$/.test(value)) {
      const newGrid = grid.map((r, i) =>
        r.map((c, j) => (i === row && j === col ? value : c))
      );
      setGrid(newGrid);
    }
  };

  return (
    <div className="grid grid-cols-9 border-4 border-black p-1 bg-gray-200">
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <input
            key={`${rowIndex}-${colIndex}`}
            type="text"
            value={cell}
            onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
            className={`w-8 h-8 text-center border focus:outline-none focus:ring-2 focus:ring-blue-500 
              ${rowIndex % 3 === 2 && rowIndex !== 8 ? "border-b-2 border-black" : ""} 
              ${colIndex % 3 === 2 && colIndex !== 8 ? "border-r-2 border-black" : ""}`}
            maxLength={1}
          />
        ))
      )}
    </div>
  );
};

export default SudokuGrid;
