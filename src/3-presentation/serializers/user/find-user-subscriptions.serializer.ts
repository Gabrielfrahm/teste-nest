import { IsNotEmpty, IsString } from 'class-validator';

export class FindUserSubscriptionsSerializer {
  @IsNotEmpty()
  @IsString()
  public userId: string;
}
