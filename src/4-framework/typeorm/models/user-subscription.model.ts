import { ISubscriptionEntity } from '@/1-domain/entities';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CreatorModel } from './creator.model';
import { UserModel } from './user.model';

@Entity('subscriptions')
export class SubscriptionModel implements ISubscriptionEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ name: 'user_id' })
  public userId: string;

  @Column({ name: 'creator_id' })
  public creatorId: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;

  @DeleteDateColumn({ nullable: true, name: 'deleted_at' })
  public deletedAt?: Date;

  @ManyToOne(() => UserModel, (user) => user.subscriptions, {
    nullable: true,
    cascade: true,
  })
  @JoinColumn({ name: 'user_id' })
  public user: UserModel;

  @ManyToOne(() => CreatorModel, (creator) => creator.subscriptions, {
    nullable: true,
    cascade: true,
  })
  @JoinColumn({ name: 'creator_id' })
  public creator: CreatorModel;
}
