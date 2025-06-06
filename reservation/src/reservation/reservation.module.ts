import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Reservation, reservationSchema } from './entities/reservation.entity';

@Module({
  imports: [ MongooseModule.forFeature([{ name: Reservation.name, schema: reservationSchema }])],
  controllers: [ReservationController],
  providers: [ReservationService],
})
export class ReservationModule {}
