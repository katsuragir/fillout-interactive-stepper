'use client';

interface InsertStepButtonProps {
  onClick: () => void;
}

export const InsertStepButton = ({ onClick }: InsertStepButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-400 bg-white hover:bg-gray-200 transition-opacity opacity-0 group-hover:opacity-100"
    >
      +
    </button>
  );
};