import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';

@Controller('reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationService.create(createReservationDto);
  }


  @Get('user/:userID')
  findOne(@Param('userID') userID: string) {
    return this.reservationService.findUser(userID);
  }


  @Delete(':isbn')
  remove(@Param('isbn') isbn: string) {
    return this.reservationService.remove(isbn);
  }
}
