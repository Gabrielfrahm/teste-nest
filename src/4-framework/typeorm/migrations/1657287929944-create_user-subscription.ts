import { MigrationInterface, QueryRunner } from 'typeorm';

export class createUserSubscription1657287929944 implements MigrationInterface {
  /**
   * Executa a migration
   * @param queryRunner
   */
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE subscriptions (        
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(),           
            "created_at" TIMESTAMP NOT NULL DEFAULT now(),         
            "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
            "deleted_at" TIMESTAMP,
            "creator_id" uuid NOT NULL REFERENCES creators("id") ON UPDATE CASCADE, 
            "user_id" uuid NOT NULL REFERENCES users("id") ON UPDATE CASCADE,       
            PRIMARY KEY ("id"))
            `);
  }
  /**
   * Reverte a migration
   * @param queryRunner
   */
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "subscriptions"`);
  }
}
