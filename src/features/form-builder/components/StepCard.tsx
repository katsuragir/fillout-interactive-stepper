"use client";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { useState, useRef, useEffect } from "react";
import clsx from "clsx";

type StepCardProps = {
  id: string;
  label: string;
  active: boolean;
  onClick: () => void;
  isMenuOpen: boolean;
  setOpenMenuId: (id: string | null) => void;
  renameStep: (id: string, newLabel: string) => void;
  duplicateStep: (id: string) => void;
  deleteStep: (id: string) => void;
};

export const StepCard = ({
  id,
  label,
  active,
  onClick,
  renameStep,
  duplicateStep,
  deleteStep,
}: StepCardProps) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={clsx("relative px-2 py-1", active && "bg-blue-100 rounded")}
    >
      <button
        onClick={onClick}
        className={clsx(
          "px-4 py-2 rounded shadow-sm border",
          active ? "bg-blue-500 text-white" : "bg-white text-gray-800"
        )}
      >
        {label}
      </button>

      <button
        onClick={() => setMenuVisible(!menuVisible)}
        className="absolute -top-2 -right-2 p-1"
      >
        <DotsHorizontalIcon />
      </button>

      {menuVisible && (
        <div
          ref={menuRef}
          className="absolute z-10 right-0 mt-2 w-40 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <button
            onClick={() => {
              const newLabel = prompt("Rename step:", label);
              if (newLabel) renameStep(id, newLabel);
              setMenuVisible(false);
            }}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Rename
          </button>
          <button
            onClick={() => {
              duplicateStep(id);
              setMenuVisible(false);
            }}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Duplicate
          </button>
          <button
            onClick={() => {
              deleteStep(id);
              setMenuVisible(false);
            }}
            className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};
