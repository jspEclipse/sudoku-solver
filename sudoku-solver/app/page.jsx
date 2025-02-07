import Image from "next/image";
import SudokuGrid from "./components/SudokuGrid";

export default function Home() {
  return (
    <div className="flex justify-center">
      <SudokuGrid/>
    </div>
  );
}
