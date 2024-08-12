import React, { ChangeEvent, useState, useEffect } from "react";
import TasksCard from "@/components/Tasks/TasksCard";

interface Tasks {
  description: string;
}

const TasksElement = () => {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [taskDescription, setTaskDescription] = useState("");
  const isCreateButtonDisabled = !taskDescription.trim();

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks && storedTasks !== "[]") {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleTaskDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskDescription(e.target.value);
  };

  const handleTaskAddToTable = () => {
    setTasks((prevTasks) => [...prevTasks, { description: taskDescription }]);
    setTaskDescription("");
  };

  const handleTaskDeleteFromTable = (index: number) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <TasksCard
      tasks={tasks}
      handleTaskDescriptionChange={handleTaskDescriptionChange}
      handleTaskAddToTable={handleTaskAddToTable}
      handleTaskDeleteFromTable={handleTaskDeleteFromTable}
      isCreateButtonDisabled={isCreateButtonDisabled}
    />
  );
};

export default TasksElement;
