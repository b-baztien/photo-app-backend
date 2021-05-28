import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID } from 'mongodb';
import { ILike, Like, Repository } from 'typeorm';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { Photo } from './entities/photo.entity';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(Photo)
    private photoRepository: Repository<Photo>,
  ) {}

  async create(createPhotoDto: CreatePhotoDto) {
    return this.photoRepository.save(createPhotoDto);
  }

  findAll(searchText: string) {
    return this.photoRepository.find({
      where: {
        $or: [
          {
            title: { $regex: `.*${searchText ?? ''}.*`, $options: 'i' },
          },
          {
            description: { $regex: `.*${searchText ?? ''}.*`, $options: 'i' },
          },
        ],
      },
    });
  }

  findOne(id: ObjectID) {
    return this.photoRepository.find({ where: { _id: id } });
  }

  async update(id: ObjectID, updatePhotoDto: UpdatePhotoDto) {
    let stringId: string = id.toHexString();
    return this.photoRepository.update(stringId, updatePhotoDto);
  }

  async updatePhoto(id: ObjectID, files: string[]) {
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
