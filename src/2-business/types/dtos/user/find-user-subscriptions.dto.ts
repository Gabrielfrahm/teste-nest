import { ISubscriptionEntity, IUserEntity } from '@/1-domain/entities';
import { Either } from '@/shared/either';
import { IError } from '@/shared/error';
import { IInputFindOneUserDto } from './find-one-user.dto';

interface IInputFindUserSubscriptionsDto {
  query: IInputFindOneUserDto;
  subscriptions: ISubscriptionEntity[];
}

type IOutputFindUserSubscriptionsDto = Either<IError, IUserEntity>;

export { IInputFindUserSubscriptionsDto, IOutputFindUserSubscriptionsDto };
