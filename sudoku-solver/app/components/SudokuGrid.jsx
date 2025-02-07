'use client'
import React, { useState } from "react";
import { Button } from "../../components/ui/button";

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

  const solveSudoku = () => {
    const newGrid = grid.map(row => row.map(cell => (cell === "" ? 0 : parseInt(cell))));

    if (SudokuBacktrackSolve(newGrid, 0, 0)) {
      setGrid(newGrid.map(row => row.map(cell => (cell === 0 ? "" : cell.toString()))));
    } else {
      alert("No solution found");
    }
  };

  function SudokuBacktrackSolve(grid, r, c) {
    if (r === 9) return true;
    if (c === 9) return SudokuBacktrackSolve(grid, r + 1, 0);
    if (grid[r][c] !== 0) return SudokuBacktrackSolve(grid, r, c + 1);

    for (let k = 1; k <= 9; k++) {
      if (IsValid(grid, r, c, k)) {
        grid[r][c] = k;
        if (SudokuBacktrackSolve(grid, r, c + 1)) return true;
        grid[r][c] = 0;
      }
    }
    return false;
  }

  function IsValid(grid, r, c, k) {
    for (let i = 0; i < 9; i++) {
      if (grid[r][i] === k || grid[i][c] === k) return false;
    }

    let startRow = Math.floor(r / 3) * 3;
    let startCol = Math.floor(c / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (grid[i][j] === k) return false;
      }
    }

    return true;
  }

  return (
    <div className="flex flex-col">
      <div className="relative w-fit bg-gray-200">
        <div className="grid grid-cols-9">
          {grid.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <input
                key={`${rowIndex}-${colIndex}`}
                type="text"
                value={cell}
                onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                className="w-10 h-10 text-center border border-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))
          )}
        </div>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {[1, 2].map((i) => (
            <React.Fragment key={i}>
              <div
                className="absolute bg-black"
                style={{
                  left: `${(i * 100) / 3}%`,
                  top: 0,
                  height: "100%",
                  width: "2px",
                }}
              />
              <div
                className="absolute bg-black"
                style={{
                  top: `${(i * 100) / 3}%`,
                  left: 0,
                  width: "100%",
                  height: "2px",
                }}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Button className="m-2" onClick={solveSudoku}>Solve</Button>
      </div>
    </div>
  );
};

export default SudokuGrid;
