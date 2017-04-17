/** @imports */
import { Column } from "typeorm" ;
import { Entity } from "typeorm" ;
import { PrimaryGeneratedColumn } from "typeorm" ;

/** @exports */
@Entity( "Token" )
export class Token
{
  @PrimaryGeneratedColumn()
  public id : number ;

  @Column({ name : "accessToken" , type : "string" })
  public accessToken : string ;

  @Column({ name : "accessExpires" , type : "datetime" })
  public accessTokenExpiresAt : Date ;

  @Column( "string" )
  public client : string ;

  @Column( "string" )
  public user : string ;

}
