import { Module } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { PhotosController } from './photos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './entities/photo.entity';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

const storage = {};

@Module({
  imports: [
    TypeOrmModule.forFeature([Photo]),
    MulterModule.register({
      storage: diskStorage({
        destination: './upload',
        filename: (req, file, cb) => {
          const extension = file.originalname.split('.').pop();

          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);

          cb(null, `${file.filename}-${uniqueSuffix}.${extension}`);
        },
      }),
    }),
  ],
  controllers: [PhotosController],
  providers: [PhotosService],
})
export class PhotosModule {}
