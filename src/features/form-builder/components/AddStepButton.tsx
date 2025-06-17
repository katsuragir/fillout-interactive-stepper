type Props = {
  onClick: () => void;
};

export const AddStepButton = ({ onClick }: Props) => (
  <button
    onClick={onClick}
    className="mx-2 rounded-full bg-white text-gray-500 border border-gray-300 hover:bg-gray-100 w-6 h-6 flex items-center justify-center text-sm"
    aria-label="Add step"
  >
    +
  </button>
);
