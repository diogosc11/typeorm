import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createLesson1615163156808 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: 'lesson',
            columns: [
                {
                    name: 'idAula',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                },
                {
                    name: 'description',
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
        queryRunner.dropTable('lesson');
    }

}
