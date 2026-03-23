import { 
    Controller, 
    Get,
    Param,
    Query,
    Post,
    Put,
    Delete,
    Body
} from '@nestjs/common';
import { TasksService } from './tasks.service'

@Controller('tasks')
export class TasksController {
    constructor(private readonly taskService: TasksService) {}

    //Buscar todas as tasks
    @Get()
    getTasks() {
        return this.taskService.listAllTasks()
    }

    //Buscar com filtros
    @Get("/busca")
    findManyTasks(@Query() queryParam: any) {
        return this.taskService.findManyTasks(queryParam)
    }

    //Buscar task por id
    @Get(":id")
    findSingleTask(@Param( 'id' ) id: string) {
        return this.taskService.findOneTask(id)
    }

    //Criar uma task
    @Post()
    createTask(@Body() body: any) {
        return this.taskService.create(body)
    }

    //Atualizar uma task
    @Put(":id") //Patch
    updateTask(@Param('id') id: string, @Body() body: any){
        return this.taskService.update(id, body)
    }

    //Excluir uma task
    @Delete(":id")
    deleteTask(@Param("id") id: string) {
        return this.taskService.delete(id)
    }
}
