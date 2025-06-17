type StepConnectorProps = {
  onAdd: () => void;
};

export const StepConnector = ({ onAdd }: StepConnectorProps) => {
  return (
    <div className="relative flex items-center justify-center px-1 group">
      {/* Garis */}
      <div className="w-6 h-0.5 bg-gray-300" />

      {/* Tombol '+' yang muncul saat hover */}
      <button
        onClick={onAdd}
        className="absolute z-10 hidden group-hover:flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-400 text-xs text-gray-600 shadow hover:bg-gray-100"
        aria-label="Add step"
      >
        +
      </button>
    </div>
  );
};
