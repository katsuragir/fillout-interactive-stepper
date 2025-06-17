"use client";

import { ReactNode } from "react";

export const Menu = ({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) => {
  return (
    <div
      className="absolute top-full mt-2 right-0 w-40 bg-white border rounded shadow z-50"
      onMouseLeave={onClose}
    >
      {children}
    </div>
  );
};

export const MenuItem = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => (
  <div
    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
    onClick={(e) => {
      e.stopPropagation();
      onClick();
    }}
  >
    {label}
  </div>
);
