/** @imports */
import { Column } from "typeorm" ;
import { Entity } from "typeorm" ;
import { PrimaryGeneratedColumn } from "typeorm" ;

/** @exports */
@Entity( "User" )
export class User
{
  @PrimaryGeneratedColumn()
  public id : number ;

  @Column( "string" )
  public key : string ;

  @Column( "string" )
  public username : string ;

  @Column( "string" )
  public password : string ;

  @Column( "string" )
  public salt : string ;

}
