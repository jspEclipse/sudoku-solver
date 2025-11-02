const TopHeader = () => {
    return (
        <div className="flex flex-col text-white min-h-28 ">
            <div className="bg-[#4A4947] text-center text-[3rem]">
                Sudoku
            </div>
            <div className="text-center">
                populate the sudoku grid to see if it can be solved
            </div>
        </div>
    );
}

export default TopHeader;