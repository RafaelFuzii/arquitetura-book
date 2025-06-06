import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

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