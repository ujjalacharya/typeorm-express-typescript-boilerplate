import { Entity, BeforeInsert, Column } from "typeorm";
import slugify from "slugify";

import Model from "./Model";

@Entity("users")
export class User extends Model {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  slug: string;

  @Column({type: 'simple-json', nullable: true})
  attributes: {};

  @BeforeInsert()
  createSlug() {
    this.slug =
      slugify(this.firstName + this.lastName, { lower: true }) +
      "-" +
      ((Math.random() * Math.pow(36, 6)) | 0).toString(36);
  }
}
