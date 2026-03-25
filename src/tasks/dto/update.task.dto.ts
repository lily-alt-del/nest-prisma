import { IsBoolean, IsOptional, IsString, MinLength } from "class-validator";

export class UpdateTaskDto {
    @IsOptional()
    @IsString({ message: 'nome precisa ser uma string'})
    @MinLength(5, { message: 'nome precisa ter pelo menos 5 caracteres' })
    readonly name?: string;

    @IsOptional()
    @IsString({ message: 'descrição precisa ser uma string' })
    @MinLength(10, { message: 'nome precisa ter pelo menos 10 caracteres' })
    readonly description?: string;

    @IsOptional()
    @IsBoolean()
    readonly completed?: boolean;
}