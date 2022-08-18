import { MigrationInterface, QueryRunner } from 'typeorm';

export class createCreator1657287422654 implements MigrationInterface {
  /**
   * Executa a migration
   * @param queryRunner
   */
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE creators (        
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
            "email" VARCHAR(255) NOT NULL UNIQUE,
            "username" VARCHAR(255) NOT NULL,
            "name" VARCHAR(255) NOT NULL,
            "phone" VARCHAR(255) NOT NULL,
            "birthday" VARCHAR(255) NOT NULL,
            "password"  VARCHAR(255) NOT NULL,        
            "created_at" TIMESTAMP NOT NULL DEFAULT now(),         
            "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
            "deleted_at" TIMESTAMP,      
            "creator_status_id" uuid NOT NULL REFERENCES creator_status("id") ON UPDATE CASCADE, 
            "create_address_id" uuid NOT NULL REFERENCES create_addresses("id") ON UPDATE CASCADE,       
            PRIMARY KEY ("id"))
            `);
  }
  /**
   * Reverte a migration
   * @param queryRunner
   */
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "creators"`);
  }
}
