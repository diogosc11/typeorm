import { type } from "os";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createClass1615161953533 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'class',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'duration',
                    type: 'integer',
                },
                {
                    name: 'created_At',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'update_At',
                    type: 'timestamp',
                    default: 'now()',
                },
            ]            
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('class');
    }

}
