"use client";

type AddPageButtonProps = {
  onClick: () => void;
};

export const AddPageButton = ({ onClick }: AddPageButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="ml-2 whitespace-nowrap rounded border border-blue-500 px-3 py-1 text-sm text-blue-500 hover:bg-blue-50 transition"
    >
      + Add page
    </button>
  );
};
