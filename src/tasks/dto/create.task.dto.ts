import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateTaskDto {
    @IsString({ message: 'nome precisa ser uma string'})
    @MinLength(5, { message: 'nome precisa ter pelo menos 5 caracteres' })
    @IsNotEmpty({ message: 'nome deve ser requerido' })
    readonly name: string;

    @IsString({ message: 'descrição precisa ser uma string' })
    @MinLength(10, { message: 'nome precisa ter pelo menos 10 caracteres' })
    readonly description: string;
}
