"use client";
import React, { useState, useEffect } from "react";

function Dropdown({ title, children, forceOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(forceOpen);
  }, [forceOpen]);

  return (
    <div className="border border-gray-300 rounded-lg px-2 my-2 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left font-semibold flex items-center justify-between rounded-lg hover:cursor-pointer p-2"
      >   
        <span className="leading-none m-0 p-0 flex items-center">{title}</span>
        <span className="flex items-center">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && <div className="px-2">{children}</div>}
    </div>
  );
}

export default Dropdown;
