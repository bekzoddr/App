import React, { useState } from "react";
import { LiaClipboardListSolid } from "react-icons/lia";
import { BiSolidAnalyse } from "react-icons/bi";
import { FaCalculator } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineSell } from "react-icons/md";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import dayjs from "dayjs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(dayjs());

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handlePreviousMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };

  return (
    <>
      <div className="sidebar-menu container">
        <div
          className={`menu-button ${isOpen ? "open" : ""}`}
          onClick={toggleSidebar}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <ul>
            <li>Element 1</li>
            <li>Element 2</li>
            <li>Element 3</li>
          </ul>
        </div>
      </div>
      <div className="date">
        <button onClick={handlePreviousMonth}>
          <FaChevronLeft />
        </button>
        <span>{currentDate.format("MMMM, YYYY")}</span>
        <button onClick={handleNextMonth}>
          <FaChevronRight />
        </button>
      </div>
      <nav className="navbar">
        <ul className="nav__links">
          <li className="nav__link">
            <LiaClipboardListSolid />
            <span>Home</span>
          </li>
          <li className="nav__link">
            <BiSolidAnalyse />
            <span>Analysis</span>
          </li>
          <li className="nav__link">
            <FaCalculator />
            <span>Calculator</span>
          </li>
          <li className="nav__link">
            <IoWalletOutline />
            <span>Budget</span>
          </li>
          <li className="nav__link">
            <MdOutlineSell />
            <span>Sell</span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
