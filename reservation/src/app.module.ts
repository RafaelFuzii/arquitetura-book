import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ReservationModule } from './reservation/reservation.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb://localhost:27018/reservation"), ReservationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
