import { Step } from "../types";

type Props = {
  step: Step;
};

export const StepItem = ({ step }: Props) => (
  <div className="flex items-center px-4 py-2 bg-white rounded-lg border border-gray-300 text-sm text-gray-800 shadow-sm">
    <span className="mr-2">📄</span>
    {step.title}
  </div>
);
