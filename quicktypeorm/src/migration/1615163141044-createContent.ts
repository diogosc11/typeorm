import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createContent1615163141044 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'content',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                },
                {
                    name: 'description',
                    type: 'varchar',
                },
                {
                    name: 'linkContent',
                    type: 'varchar',
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
        queryRunner.dropTable('content');
    }

}
