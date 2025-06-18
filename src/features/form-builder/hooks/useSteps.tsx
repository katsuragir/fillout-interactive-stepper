"use client";

import { useState } from "react";
import { nanoid } from "nanoid";
import { Icon } from "../types";

type Step = {
  id: string;
  label: string;
  icon: Icon; // Optional icon for the step
};

export const useSteps = () => {
  const [steps, setSteps] = useState<Step[]>([
    {
      id: nanoid(),
      label: "Info",
      icon: { name: "info", color: "#8C93A1", size: 20 },
    },
    {
      id: nanoid(),
      label: "Details",
      icon: { name: "file-text", color: "#8C93A1", size: 20 },
    },
    {
      id: nanoid(),
      label: "Other",
      icon: { name: "file-text", color: "#8C93A1", size: 20 },
    },
    {
      id: nanoid(),
      label: "Ending",
      icon: { name: "circle-check", color: "#8C93A1", size: 20 },
    },
  ]);

  const [activeStep, setActiveStep] = useState<string>(steps[0].id);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const insertStep = (index: number) => {
    const newStep: Step = {
      id: nanoid(),
      label: `Page ${steps.length + 1}`,
      icon: { name: "file-text", color: "#8C93A1", size: 20 }, // Default icon for new steps
    };
    const updated = [...steps];
    updated.splice(index, 0, newStep);
    setSteps(updated);
  };

  const reorderSteps = (newOrder: Step[]) => {
    setSteps(newOrder);
  };

  const renameStep = (id: string, newLabel: string) => {
    setSteps((prev) =>
      prev.map((s) => (s.id === id ? { ...s, label: newLabel } : s))
    );
  };

  const duplicateStep = (id: string) => {
    const index = steps.findIndex((s) => s.id === id);
    if (index !== -1) {
      const newStep: Step = {
        id: nanoid(),
        label: `${steps[index].label} (copy)`,
        icon: { ...steps[index].icon }, // Duplicate the icon as well
      };
      const updated = [...steps];
      updated.splice(index + 1, 0, newStep);
      setSteps(updated);
    }
  };

  const deleteStep = (id: string) => {
    const updated = steps.filter((s) => s.id !== id);
    setSteps(updated);
    if (activeStep === id && updated.length > 0) {
      setActiveStep(updated[0].id);
    }
  };

  return {
    steps,
    activeStep,
    setActiveStep,
    insertStep,
    reorderSteps,
    renameStep,
    duplicateStep,
    deleteStep,
    openMenuId,
    setOpenMenuId,
  };
};
