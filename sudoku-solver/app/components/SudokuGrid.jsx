'use client'
import React, { useState } from "react";
import { Button } from "../../components/ui/button"

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
                <>
                    {/* Vertical Lines */}
                    <div
                    key={`v-${i}`}
                    className="absolute bg-black"
                    style={{
                        left: `${(i * 100) / 3}%`,
                        top: 0,
                        height: "100%",
                        width: "2px",
                    }}
                    />
                    {/* Horizontal Lines */}
                    <div
                    key={`h-${i}`}
                    className="absolute bg-black"
                    style={{
                        top: `${(i * 100) / 3}%`,
                        left: 0,
                        width: "100%",
                        height: "2px",
                    }}
                    />
                </>
                ))}
            </div>
        </div>
        <div className="flex justify-center">
            <Button className="m-2 ">Solve</Button>
        </div>
    </div>
  );
};






export default SudokuGrid;
