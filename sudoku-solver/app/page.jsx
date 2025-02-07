import SudokuGrid from "./components/SudokuGrid";
import TopHeader from "./components/TopHeader";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <div>
        <TopHeader/>
      </div>
      <div className="flex justify-center bg-[#FAF7F0] pt-4">
        <SudokuGrid/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
