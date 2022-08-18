import { MigrationInterface, QueryRunner } from 'typeorm';
import { CreatorAddressModel } from '../models/creator-address.model';
import { CreatorStatusModel } from '../models/creator-status.model';
import { CreatorModel } from '../models/creator.model';
import bcrypt, { genSalt } from 'bcrypt';
import { UserStatusModel } from '../models/user-status.model';
import { UserModel } from '../models/user.model';
import { SubscriptionModel } from '../models/user-subscription.model';
export class startDatabase1657412685672 implements MigrationInterface {
  /**
   * Método povoa o banco de dados
   * @param queryRunner
   */
  public async up(queryRunner: QueryRunner): Promise<void> {
    const createAddressesRepository = await queryRunner.manager.getRepository(
      CreatorAddressModel,
    );
    const creatorStatusModelRepository =
      await queryRunner.manager.getRepository(CreatorStatusModel);
    const creatorModelRepository = await queryRunner.manager.getRepository(
      CreatorModel,
    );
    const userStatusModelRepository = await queryRunner.manager.getRepository(
      UserStatusModel,
    );
    const userModelRepository = await queryRunner.manager.getRepository(
      UserModel,
    );
    const subscriptionModelRepository = await queryRunner.manager.getRepository(
      SubscriptionModel,
    );
    const salt = await genSalt(12);
    const password = await bcrypt.hash('123@8aBe32', salt);
    const address1 = await createAddressesRepository.save({
      street: 'Rua y',
      addrnumber: 1,
      state: 'BA',
      city: 'Feira de Santana',
      zipcode: '44088-666',
    });
    const address2 = await createAddressesRepository.save({
      street: 'Rua Z',
      addrnumber: 2,
      state: 'BA',
      city: 'Feira de Santana',
      zipcode: '44088-666',
    });
    const creatorStatus1 = await creatorStatusModelRepository.save({
      isVerified: true,
    });
    const creatorStatus2 = await creatorStatusModelRepository.save({
      isVerified: true,
    });

    const creator1 = await creatorModelRepository.save({
      name: 'Alan Bruno Rios Miguel',
      username: 'bruno',
      email: 'sosvari21@gamil.com',
      phone: '75988686073',
      birthday: '1994/03/09',
      creatorStatusId: creatorStatus1.id,
      createAddressId: address1.id,
      password,
    });
    await creatorModelRepository.save({
      name: 'Alan Bruno Rios Miguel',
      username: 'bruno2',
      email: 'alanbrunoriosmiguel@gamil.com',
      phone: '75988686092',
      birthday: '1994/03/09',
      creatorStatusId: creatorStatus2.id,
      createAddressId: address2.id,
      password,
    });
    const statusUser1 = await userStatusModelRepository.save({
      isVerified: true,
    });
    const user1 = await userModelRepository.save({
      username: 'bruno',
      email: 'alan.miguel.rios.miguel@gmail.com',
      phone: '75988686073',
      birthday: '1994/03/09',
      userStatusId: statusUser1.id,
      password,
    } as any);
    await subscriptionModelRepository.save({
      userId: user1.id,
      creatorId: creator1.id,
    });
  }

  /**
   *
   * @param queryRunner
   */
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(``);
  }
}
