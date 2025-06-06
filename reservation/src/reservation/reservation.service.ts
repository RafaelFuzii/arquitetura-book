import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import axios from 'axios';
import { InjectModel } from '@nestjs/mongoose';
import { Reservation } from './entities/reservation.entity';
import { Model } from 'mongoose';

@Injectable()
export class ReservationService {
  constructor(
    @InjectModel(Reservation.name) private reservationModel: Model<Reservation>
  ) {}
  
  async create(createReservationDto: CreateReservationDto) {
    const book = await axios.get(`http://localhost:3000/books/${createReservationDto.ISBN}`)

    if (book.data.status == "disponivel") {
      const reservationApproved = new this.reservationModel(createReservationDto)
      reservationApproved.status = "ativo"
      await reservationApproved.save()

      await axios.put(`http://localhost:3000/books/${createReservationDto.ISBN}`, {status: "reservado"})
      return reservationApproved
    } else {
      return new NotFoundException("O livro esta indisponivel para reserva")
    }

  }

  async findUser(userID: string) {
    return await this.reservationModel.findOne({userID: userID})
  }

  async remove(isbn: string) {
    const reservation = await this.reservationModel.findOne({ISBN: isbn})

    if (reservation) {
      await axios.put(`http://localhost:3000/books/${isbn}`, {status: "disponivel"})
      await reservation.deleteOne({ISBN: isbn})
      return "Reserva Cancelado"
    }

    return "Reserva nao encontrado"
  }
}
