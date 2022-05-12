import { Tasks } from "../models/Tasks.models";

export const UpdateTask = async (taskId:number, taskName:string, taskDate:Date) => {
    console.log(taskId, taskName, taskDate);
    try {
        await Tasks.update({
            name: taskName,
            date: taskDate,
            is_completed: true
        },
        {
            where: { id: taskId }
        })
    } catch (error) {
        return error;
    }
}