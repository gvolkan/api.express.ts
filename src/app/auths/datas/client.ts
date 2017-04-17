/** @imports */
import { Column } from "typeorm" ;
import { Entity } from "typeorm" ;
import { PrimaryGeneratedColumn } from "typeorm" ;

/** @exports */
@Entity( "Client" )
export class Client
{
  @PrimaryGeneratedColumn()
  public id : number ;

  @Column({ name : "key" , type : "string" })
  public clientId : string ;

  @Column({ name : "secret" , type : "string" })
  public clientSecret : string ;

  @Column( "simple_array" )
  public grants : Array<string> ;

}
