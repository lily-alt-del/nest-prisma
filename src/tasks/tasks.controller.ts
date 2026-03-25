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
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create.task.dto';
import { UpdateTaskDto } from './dto/update.task.dto';

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
    createTask(@Body() createTaskDto: CreateTaskDto) {
        return this.taskService.create(createTaskDto)
    }

    //Atualizar uma task
    @Put(":id") //Patch
    updateTask(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto){
        return this.taskService.update(id, updateTaskDto)
    }

    //Excluir uma task
    @Delete(":id")
    deleteTask(@Param("id") id: string) {
        return this.taskService.delete(id)
    }
}
