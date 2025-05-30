import { IsEnum, IsNotEmpty, MaxLength } from 'class-validator';
import { bookEnum } from '../enum/bookEnum';

export class CreateBookDto {

    @IsNotEmpty()
    titulo: string;

    @IsNotEmpty()
    autor: string;

    @IsEnum(bookEnum, { message: 'O status deve ser "disponivel" ou "reservado".' })
    status: bookEnum;

    @IsNotEmpty()
    @MaxLength(13, {message: "O ISBN nao pode ser maior que 13 caracteres"})
    ISBN: string;
}
