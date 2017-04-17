/** @imports */
import { Column } from "typeorm" ;
import { Entity } from "typeorm" ;
import { PrimaryGeneratedColumn } from "typeorm" ;

/** @exports */
@Entity()
export class User
{
  @PrimaryGeneratedColumn()
  public id : number ;

  @Column()
  public key : string ;

  @Column()
  public name : string ;

  @Column()
  public email : string ;

  @Column()
  public token : string ;

  @Column()
  public pass : string ;

  @Column()
  public salt : string ;

}
