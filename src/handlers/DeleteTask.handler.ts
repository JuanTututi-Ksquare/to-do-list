import { Tasks } from "../models/Tasks.models";

export const DeleteTask = (taskId: number) => {
    try {
        Tasks.destroy({
            where: {
                id: taskId
            } 
        })
    } catch (error) {
        return error
    }
}