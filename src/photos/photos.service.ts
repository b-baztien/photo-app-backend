import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID } from 'mongodb';
import { Repository } from 'typeorm';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { Photo } from './entities/photo.entity';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(Photo)
    private photoRepository: Repository<Photo>,
  ) {}

  create(createPhotoDto: CreatePhotoDto) {
    return this.photoRepository.create(createPhotoDto);
  }

  findAll() {
    return this.photoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} photo`;
  }

  async update(id: ObjectID, updatePhotoDto: UpdatePhotoDto) {
    let newPhoto: Photo[] = await this.photoRepository.find({
      where: { _id: id },
    });

    // newPhoto[0] = newPhoto[0].title;
    // return this.photoRepository.save();
  }

  async remove(id: ObjectID) {
    let newPhoto: Photo[] = await this.photoRepository.find({
      where: { _id: id },
    });

    return this.photoRepository.remove(newPhoto);
  }
}
