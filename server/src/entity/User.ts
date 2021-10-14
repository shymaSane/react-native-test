import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column({
    length: 100,
  })
  username: string;

  @Column()
  password: string;

  @Column()
  birthday: number;
}
