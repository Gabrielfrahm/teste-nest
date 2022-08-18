import { ICreatorStatusEntity } from '@/1-domain/entities';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('creator_status')
export class CreatorStatusModel implements ICreatorStatusEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ name: 'is_blocked' })
  public isBlocked: boolean;

  @Column({ name: 'is_deleted' })
  public isDeleted: boolean;

  @Column({ name: 'is_verified' })
  public isVerified: boolean;

  @Column({ name: 'is_permanent_banned' })
  public isPermanentBanned: boolean;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;

  @DeleteDateColumn({ nullable: true, name: 'deleted_at' })
  public deletedAt?: Date;
}
