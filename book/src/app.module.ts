import { Module } from '@nestjs/common';
import { BookController } from './book/book.controller';
import { BookService } from './book/book.service';
import { BookModule } from './book/book.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot("mongodb://localhost:27017/books"),
  BookModule], 
})
export class AppModule {}
