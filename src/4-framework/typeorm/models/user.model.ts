import { IUserEntity } from '@/1-domain/entities';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserStatusModel } from './user-status.model';
import { SubscriptionModel } from './user-subscription.model';

@Entity('users')
export class UserModel implements IUserEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ unique: true })
  public username: string;

  @Column({ unique: true })
  public email: string;

  @Column()
  public password: string;

  @Column({ type: 'date' })
  public birthday: string;

  @Column({ name: 'user_status_id' })
  public userStatusId: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  public deletedAt?: Date;

  @OneToMany(() => SubscriptionModel, (subscription) => subscription.user)
  @JoinTable({ name: 'subscriptions' })
  public subscriptions: SubscriptionModel[];

  @OneToOne(() => UserStatusModel, {
    nullable: false,
    cascade: true,
  })
  @JoinColumn({ name: 'user_status_id' })
  public userStatus: UserStatusModel;
}
