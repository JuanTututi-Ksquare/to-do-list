import { Tasks } from "../models/Tasks.models";

export const GetTasks = async () => {
  try {
    const tasks = await Tasks.findAll();
    return JSON.stringify(tasks, null, 2);
  } catch (error) {
    return error;
  }
};
