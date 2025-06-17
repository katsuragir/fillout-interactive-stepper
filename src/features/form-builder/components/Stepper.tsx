"use client";

import { useSteps } from "../hooks/useSteps";
import { StepCard } from "./StepCard";
import { InsertStepButton } from "./InsertStepButton";
import { AddPageButton } from "./AddPageButton";

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";

export const Stepper = () => {
  const {
    steps,
    activeStep,
    setActiveStep,
    insertStep,
    reorderSteps,
    openMenuId,
    setOpenMenuId,
    renameStep,
    duplicateStep,
    deleteStep,
  } = useSteps();

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = steps.findIndex((s) => s.id === active.id);
      const newIndex = steps.findIndex((s) => s.id === over.id);
      reorderSteps(arrayMove(steps, oldIndex, newIndex));
    }
  };

  return (
    <div className="block w-full max-w-4xl mx-auto p-4 ">
      <div className="flex items-center">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={steps.map((s) => s.id)}
            strategy={horizontalListSortingStrategy}
          >
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center group">
                <StepCard
                  id={step.id}
                  label={step.label}
                  active={step.id === activeStep}
                  onClick={() => setActiveStep(step.id)}
                  isMenuOpen={openMenuId === step.id}
                  setOpenMenuId={setOpenMenuId}
                  renameStep={renameStep}
                  duplicateStep={duplicateStep}
                  deleteStep={deleteStep}
                />
                {index < steps.length - 1 && (
                  <InsertStepButton onClick={() => insertStep(index + 1)} />
                )}
              </div>
            ))}
          </SortableContext>
        </DndContext>

        {/* Tombol Add Page di akhir */}
        <div className="flex items-center">
          <div className="h-[2px] w-4 bg-gray-400 mx-2" />
          <AddPageButton onClick={() => insertStep(steps.length)} />
        </div>
      </div>
    </div>
  );
};
