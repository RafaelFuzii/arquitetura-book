import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { bookEnum } from "../enum/bookEnum";

@Schema()
export class Book {
    @Prop()
    titulo: string

    @Prop()
    autor: string

    @Prop()
    status: string

    @Prop()
    ISBN: string
}

export const bookSchema = SchemaFactory.createForClass(Book)