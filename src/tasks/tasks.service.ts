import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    listAllTasks() {
        return [
            { id: 1, task: "Cpmprar pão" },
            { id: 2, task: 'Estudar para a prova' }
        ]
    }

    findOneTask(id: string) {
        return { id: 1, task: "Comprar pão" }
    }
}
