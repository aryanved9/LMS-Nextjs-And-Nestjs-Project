import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('courses')    
export class Course {

@PrimaryGeneratedColumn()
id: number;

@Column()
title: string;

@Column({nullable: true})
description: string;

@Column()
instructor: string;

@Column({default: 0})
duration: number;

@Column({default: true})
isActive: boolean;

@CreateDateColumn()
createdAt: Date;

@UpdateDateColumn()
updatedAt: Date;

}