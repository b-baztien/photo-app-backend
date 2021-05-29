import { IsNotEmpty } from 'class-validator';

export class CreatePhotoDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  photos: string[];
}
