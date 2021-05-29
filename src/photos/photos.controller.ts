import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ObjectID } from 'mongodb';
import { ParseObjectIdPipe } from 'src/common/pipes';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { PhotosService } from './photos.service';

@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  @Post()
  async create(@Body() createPhotoDto: CreatePhotoDto) {
    return this.photosService.create(createPhotoDto);
  }

  @Get()
  findAll(@Query('searchText') searchText: string) {
    return this.photosService.findAll(searchText);
  }

  @Get(':id')
  findOne(@Param('id', ParseObjectIdPipe) id: ObjectID) {
    return this.photosService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseObjectIdPipe) id: ObjectID,
    @Body() updatePhotoDto: UpdatePhotoDto,
  ) {
    return this.photosService.update(id, updatePhotoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseObjectIdPipe) id: ObjectID) {
    return this.photosService.remove(id);
  }
}
