import { ICreatorEntity } from '@/1-domain/entities';
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
import { CreatorAddressModel } from './creator-address.model';
import { CreatorStatusModel } from './creator-status.model';
import { SubscriptionModel } from './user-subscription.model';

@Entity('creators')
export class CreatorModel implements ICreatorEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public name: string;

  @Column()
  public username: string;

  @Column()
  public email: string;

  @Column()
  public phone: string;

  @Column()
  public birthday: string;

  @Column()
  public password: string;

  @Column({ name: 'creator_status_id' })
  public creatorStatusId: string;

  @Column({ name: 'create_address_id' })
  public createAddressId: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;

  @DeleteDateColumn({ nullable: true, name: 'deleted_at' })
  public deletedAt?: Date;

  @OneToMany(() => SubscriptionModel, (subscription) => subscription.creator)
  @JoinTable({ name: 'subscriptions' })
  public subscriptions: SubscriptionModel[];

  @OneToOne(() => CreatorStatusModel, {
    nullable: false,
    cascade: true,
  })
  @JoinColumn({ name: 'creator_status_id' })
  public creatorStatus: CreatorStatusModel;

  @OneToOne(() => CreatorAddressModel, {
    nullable: false,
    cascade: true,
  })
  @JoinColumn({ name: 'create_address_id' })
  public creatorAddress: CreatorAddressModel;
}
