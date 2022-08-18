import {
  IInputFindUserSubscriptionsDto,
  IOutputFindUserSubscriptionsDto,
} from '@/2-business/types';
import { FindOneUserUseCase } from '@/2-business/usecases';
import { left, right } from '@/shared/either';
import { AbstractController } from '../abstract.controller';

export class FindUserSubscriptionsController extends AbstractController<
  IInputFindUserSubscriptionsDto,
  IOutputFindUserSubscriptionsDto
> {
  /**
   * Constructor for FindUserSubscriptionsController. Injects dependencies.
   * @param {FindOneUserUseCase} findOneUserUseCase
   */
  constructor(private readonly findOneUserUseCase: FindOneUserUseCase) {
    super();
  }

  /**
   * Finds a user based on a unique key value and then returns the user joined
   * with the subscriptions.
   * @param {IInputFindUserSubscriptionsDto} input
   * @returns {IOutputFindUserSubscriptionsDto}
   */
  public async run(
    input: IInputFindUserSubscriptionsDto,
  ): Promise<IOutputFindUserSubscriptionsDto> {
    const user = await this.findOneUserUseCase.exec({
      keys: input.query.keys,
      values: input.query.values,
    });

    if (user.isLeft()) {
      return left(user.value);
    }

    user.value.userSubscriptions = input.subscriptions || [];

    return right(user.value);
  }
}
