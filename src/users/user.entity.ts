import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Report } from '../reports/report.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  admin: boolean;

  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];

  @AfterInsert()
  logInsert() {
    console.log(`Inserted user with ID:${this.id}`);
  }

  @AfterUpdate()
  logUpdate() {
    console.log(`Updated user with ID:${this.id}`);
  }

  @AfterRemove()
  logRemove() {
    console.log(`Removed user with ID:${this.id}`);
  }
}
