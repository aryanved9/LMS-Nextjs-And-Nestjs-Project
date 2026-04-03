import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './course.entity';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
    constructor(
        @InjectRepository(Course)
        private coursesRepository: Repository<Course>
    ) { }


    async create(createCourseDto: CreateCourseDto): Promise<Course> {

        const course = this.coursesRepository.create(createCourseDto);

        return await this.coursesRepository.save(course);
    }

    async findAll(): Promise<Course[]> {
        return await this.coursesRepository.find();
    }

    async findOne(id: number): Promise<Course> {
        const course = await this.coursesRepository.findOne({ where: { id } });
        if (!course) {
            throw new NotFoundException(`Course with ID ${id} not found `);
        }
        return course;
    }

    async update(id: number, updateCourseDto: UpdateCourseDto): Promise<Course> {
        const course = await this.findOne(id);
        Object.assign(course, updateCourseDto);
        return await this.coursesRepository.save(course);
    }

    async remove(id: number): Promise<{ message: string }> {
        const course = await this.findOne(id);
        await this.coursesRepository.remove(course);
        return { message: `Course ${id} deleted successfully` };
    }
}
