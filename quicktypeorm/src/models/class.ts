import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export default class Class {
    @PrimaryGeneratedColumn('uuid')
    id: string;  
    
    @Column()
    name: string;

    @Column()
    duration: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;  
}