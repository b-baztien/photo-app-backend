import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreatePhotoDto } from './create-photo.dto';

export class UpdatePhotoDto extends PartialType(CreatePhotoDto) {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  photos: string[];
}
