import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Reservation {
    @Prop()
    userID: string

    @Prop()
    ISBN: string

    @Prop({ default: "desativado" }) 
    status: string
    
    @Prop({ 
        default: () => {
          const d = new Date();
          const year = d.getFullYear().toString().slice(-2);
          const month = (d.getMonth() + 1).toString().padStart(2, '0');
          const day = d.getDate().toString().padStart(2, '0');
          return `${year}-${month}-${day}`;
        },
      })
      data_reserva: string;
}

export const reservationSchema = SchemaFactory.createForClass(Reservation)


