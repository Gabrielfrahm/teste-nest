import { ICreatorAddressEntity } from '@/1-domain/entities';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('create_addresses')
export class CreatorAddressModel implements ICreatorAddressEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public street: string;

  @Column()
  public addrnumber: number;

  @Column()
  public city: string;

  @Column()
  public state: string;

  @Column()
  public zipcode: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;

  @DeleteDateColumn({ nullable: true, name: 'deleted_at' })
  public deletedAt?: Date;
}
