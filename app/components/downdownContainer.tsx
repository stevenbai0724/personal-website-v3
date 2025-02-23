"use client";
import React, { useState } from "react";
import Dropdown from "./dropdown";

function DropdownContainer({ children }) {
  const [allOpen, setAllOpen] = useState(false);
  
  // Toggle all dropdowns
  const toggleAll = () => {
    setAllOpen((prev) => !prev);
  };

  return (
    <div>
      <button
        onClick={toggleAll}
        className="my-2 p-2 bg-gray-800 text-white rounded-lg hover:cursor-pointer"
      >
        {allOpen ? "Collapse All" : "Expand All"}
      </button>

      {/* Render all Dropdowns with shared state */}
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { forceOpen: allOpen });
      })}
    </div>
  );
}

export default DropdownContainer;
