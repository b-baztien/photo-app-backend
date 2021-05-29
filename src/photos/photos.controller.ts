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
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ObjectID } from 'mongodb';
import { ParseObjectIdPipe } from 'src/common/pipes';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { Photo } from './entities/photo.entity';
import { PhotosService } from './photos.service';

@ApiTags('photos')
@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  @Post()
  @ApiOperation({ summary: 'Create photos' })
  async create(@Body() createPhotoDto: CreatePhotoDto): Promise<Photo> {
    return this.photosService.create(createPhotoDto);
  }

  @Get()
  @ApiOperation({ summary: 'FindAll photos' })
  findAll(@Query('searchText') searchText: string) {
    return this.photosService.findAll(searchText);
  }

  @Get(':id')
  @ApiOperation({ summary: 'FindOne photo' })
  findOne(@Param('id', ParseObjectIdPipe) id: ObjectID) {
    return this.photosService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update photos' })
  update(
    @Param('id', ParseObjectIdPipe) id: ObjectID,
    @Body() updatePhotoDto: UpdatePhotoDto,
  ) {
    return this.photosService.update(id, updatePhotoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove photos' })
  remove(@Param('id', ParseObjectIdPipe) id: ObjectID) {
    return this.photosService.remove(id);
  }
}
function ApiImplicitQuery(arg0: {
  name: string;
  description: string;
  required: boolean;
  type: NumberConstructor;
}) {
  throw new Error('Function not implemented.');
}
