import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Authentication {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  passsword: string;
}
