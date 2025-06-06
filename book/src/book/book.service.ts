import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './entities/book.entity';
import { Model } from 'mongoose';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name) private bookModel: Model<Book>
  ) {}
  
  async create(createBookDto: CreateBookDto) {
    const books = new this.bookModel(createBookDto)  
    await books.save()
    return "Livro criado com sucesso"
  }

  findAll() {
    return this.bookModel.find()
  }

  async findOne(isbn: string) {
    console.log(await this.bookModel.findOne({ISBN: isbn}))
    return await this.bookModel.findOne({ISBN: isbn}).exec()
  }

  async update(isbn: string, updateBookDto: UpdateBookDto) {
    const updateBooks = await this.bookModel.findOneAndUpdate({ ISBN: isbn},{
      $set: updateBookDto 
     }, {new: true}) 
   
     return updateBooks
  }

  async updateStatus(isbn: string, updateBookDto: UpdateBookDto) {
    return await this.bookModel.findOneAndUpdate(
      { ISBN: isbn },
      { status: updateBookDto.status },
      { new: true }
    ).exec()
  }

  async remove(id: string) {
    await this.bookModel.findByIdAndDelete(id)
    return `Livro Deletado com Sucesso`;
  }
}
