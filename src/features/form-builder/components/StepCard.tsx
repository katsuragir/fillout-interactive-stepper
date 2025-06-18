"use client";

import { useState, useRef, useEffect } from "react";
import { DynamicIcon } from "lucide-react/dynamic";
import clsx from "clsx";
import { Icon } from "../types";

type StepCardProps = {
  icon: Icon;
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
  icon,
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
    <div className={clsx("relative")}>
      <div
        onClick={onClick}
        className={clsx(
          "px-4 py-2 rounded-xl shadow-sm flex gap-2 items-center",
          active ? "bg-white text-black" : "bg-disabled text-inactive"
        )}
      >
        <DynamicIcon name={icon.name} color={icon.color} size={icon.size} />
        <span>{label}</span>
        {active && (
          <button onClick={() => setMenuVisible(!menuVisible)} className="p-1">
            <DynamicIcon name="ellipsis-vertical" color="#9DA4B2" size={20} />
          </button>
        )}
      </div>

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
