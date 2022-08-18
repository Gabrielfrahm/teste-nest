import { IsNotEmpty, IsString } from 'class-validator';

export class SubscriptionSerializer {
  @IsNotEmpty()
  @IsString()
  public id: string;

  @IsNotEmpty()
  @IsString()
  public userId: string;

  @IsNotEmpty()
  @IsString()
  public creatorId: string;

  @IsNotEmpty()
  @IsString()
  public createdAt: Date;

  @IsNotEmpty()
  @IsString()
  public updatedAt: Date;
}
