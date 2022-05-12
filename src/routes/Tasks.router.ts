import express from "express";
import { Request, Response } from "express";
import { CreateTask } from "../handlers/CreateTask.handler";
import { GetTasks } from "../handlers/GetTasks.handler";
import { DeleteTask } from "../handlers/DeleteTask.handler";
import { UpdateTask } from "../handlers/UpdateTask.handler";

const taskRouter = express.Router();

taskRouter.post("/create-task", async (req: Request, res: Response) => {
  if (req.body.name && req.body.date) {
    try {
      const date = req.body.date;
      const name = req.body.name;
      await CreateTask(name, date);
      res.send(`Record was saved Task Name: ${name}, Date: ${date}`);
    } catch (error) {
      res.send(error);
    }
  } else {
    throw new Error("Name is necessary to create new Task");
  }
});

taskRouter.get("/get-tasks", async (req: Request, res: Response) => {
  try {
    const taskList = await GetTasks();
    console.log(taskList);
    res.send(taskList);
  } catch (error) {
    res.send(error);
  }
});

taskRouter.get("/delete-task", async (req: Request, res: Response) => {
  if (req.query.id) {
    try {
      const idTask = +req.query.id;
      await DeleteTask(idTask);
      res.send("Task deleted succesfully!");
    } catch (error) {
      res.send(error);
    }
  }
});

taskRouter.post("/update-task", async (req: Request, res: Response) => {
  if (req.body.id && req.body.name && req.body.date) {
    try {
      const taskId = req.body.id;
      const taskName = req.body.name;
      const taskDate = req.body.date;
      await UpdateTask(taskId, taskName, taskDate);
      res.send("Task updated succesfully!")
    } catch (error) {
      res.send(error);
    }
  }
});

export { taskRouter };
