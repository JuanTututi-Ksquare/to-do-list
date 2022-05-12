import { Tasks } from "../models/Tasks.models";

export const CreateTask = async (taskName: string, taskDate: Date) => {
  console.log(taskName);
  console.log(taskDate);

  if (taskName.length > 150) {
    throw new Error("Task name is too large to save, please keep it short");
  } else {
    try {
      await Tasks.create({
        name: taskName,
        date: taskDate
      });
    } catch (error) {
      return error;
    }
  }
};
