import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createStudent1615163150656 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'student',
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
                    name: 'key',
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
        queryRunner.dropTable('student');
    }

}
