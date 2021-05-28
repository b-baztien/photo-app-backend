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
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { PhotosService } from './photos.service';

@Controller('photos')
export class PhotosController {
  // private photoPath: string[];
  // private id: string[];

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
  findOne(@Param('id') id: string) {
    return this.photosService.findOne(new ObjectID(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePhotoDto: UpdatePhotoDto) {
    return this.photosService.update(new ObjectID(id), updatePhotoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.photosService.remove(new ObjectID(id));
  }

  // @Get('upload/:photopath')
  // getFile(@Param('photopath') photopath: string, @Res() res) {
  //   return res.sendFile(join(process.cwd(), photopath));
  // }

  // @Post(':id/upload')
  // @UseInterceptors(FilesInterceptor('files'))
  // uploadFile(
  //   @Param('id') id: string,
  //   @UploadedFiles() files: Array<Express.Multer.File>,
  // ) {
  //   photoPath;
  //   return;
  // }
}
