import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @Get(':isbn')
  async findOne(@Param('isbn') isbn: string) {
    return await this.bookService.findOne(isbn);
  }

  @Put(':isbn')
  update(@Param('isbn') isbn: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(isbn, updateBookDto);
  }

  @Patch(':isbn/status')
  upadateStatus(@Param('isbn')isbn:string, @Body() updateBookDto:UpdateBookDto){
    return this.bookService.updateStatus(isbn,updateBookDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(id);
  }
}
