import { IsNotEmpty, MaxLength } from "class-validator";

export class CreateReservationDto {
    @IsNotEmpty()
    userID: string

    @IsNotEmpty()
    @MaxLength(13, {message: "O ISBN nao pode ser maior que 13 caracteres"})
    ISBN: string

}
