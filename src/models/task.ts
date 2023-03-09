
import { v4 as uuid } from 'uuid';
import { Task } from '../types/taskType';



export const createTask = (title: string, description: string, tag: string ): Task =>{
    const task: Task = {
        title: title,
        description: description,
        id: uuid(),
        tag: tag,
        done: false,
    }

    return task
}