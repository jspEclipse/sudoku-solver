import SudokuGrid from "./components/SudokuGrid";
import TopHeader from "./components/TopHeader";

export default function Home() {
  return (
    <div className="">
      <div>
        <TopHeader/>
      </div>
      <div className="flex justify-center">
        <SudokuGrid/>
      </div>
    </div>
  );
}
