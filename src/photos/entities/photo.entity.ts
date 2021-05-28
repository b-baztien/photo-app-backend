import { ObjectID } from 'mongodb';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Photo {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  photos: string[];
}
