import { CodeBlock } from "@/components/ui/code-block";

const Footer = () => {
  const IsValidCodeBlock = `function IsValid(grid, r, c, k) {
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
  }`;

  const SudokuBacktrackSolveCodeBlock = `function SudokuBacktrackSolve(grid, r, c) {
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
  }`;

  return (
    <>
      <div className="text-center text-[3rem] mb-4 font-bold text-white">Implementation</div>
      
      {/* IsValid Function */}
      <div className="flex items-start justify-center mb-8 text-white">
        <div className="max-w-2xl w-full mr-4">
          <CodeBlock language="jsx" highlightLines={[9, 13, 14, 18]} code={IsValidCodeBlock} />
        </div>
        <div className="max-w-2xl w-full ml-4 p-4">
          <div className="text-2xl font-semibold mb-2">IsValid Function</div>
          <p className="text-xl">
            This function checks whether a number k can be placed at position (r, c) in the Sudoku grid.
          </p>
          <br/>
          <ul className="pl-6 text-lg">
            <li>1. Ensures k is not already in the same row or column.</li>
            <li>2. Checks the 3×3 subgrid to confirm k is not present.</li>
            <li>3. If all conditions pass, k is considered a valid placement.</li>
          </ul>
        </div>
      </div>

      {/* SudokuBacktrackSolve Function */}
      <div className="flex items-start justify-center pb-8 text-white">
        <div className="max-w-2xl w-full mr-4">
          <CodeBlock language="jsx" highlightLines={[9, 13, 14, 18]} code={SudokuBacktrackSolveCodeBlock} />
        </div>
        <div className="max-w-2xl w-full ml-4 p-4">
          <div className="text-2xl font-semibold mb-2">SudokuBacktrackSolve Function</div>
          <p className="text-xl">
            This function solves the Sudoku grid using backtracking.
          </p>
          <br/>
          <ul className="pl-6 text-lg">
            <li>1. If r reaches 9, the puzzle is solved.</li>
            <li>2. Moves to the next row when it reaches column 9.</li>
            <li>3. If a cell is pre-filled, it skips to the next one.</li>
            <li>4. For empty cells, it tries numbers 1-9 and validates using IsValid().</li>
            <li>5. If a valid number is found, it recurses to solve the next cell.</li>
            <li>6. If the placement leads to a dead end, it backtracks by resetting the cell.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
