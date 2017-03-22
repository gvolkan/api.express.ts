/** @imports */
import { Get } from "ts-express-decorators" ;
import { Delete } from "ts-express-decorators" ;
import { Patch } from "ts-express-decorators" ;
import { Post } from "ts-express-decorators" ;
import { Put } from "ts-express-decorators" ;

import { Response } from "express" ;
import { BodyParams } from "ts-express-decorators" ;
import { Controller } from "ts-express-decorators" ;
import { PathParams } from "ts-express-decorators" ;
import { Response as ResponseParam } from "ts-express-decorators" ;

import { RestController } from "../shared/rest.controller" ;
import { User as T } from "./user" ;
import { UserService } from "./user.service" ;

/** @exports */
@Controller( "/user" )
export class UserController extends RestController<T>
{
  /** @param */
  @Get( "/:id" )
  public async getOne( @ResponseParam() response : Response , @PathParams( "id" ) id : number ) : Promise<Response>
  {
    return super.getOne( response , id ) ;
  }

  /** @param */
  @Delete( "/:id" )
  public async delOne( @ResponseParam() response : Response , @PathParams( "id" ) id : number ) : Promise<Response>
  {
    return super.delOne( response , id ) ;
  }

  /** @param */
  @Put( "/:id" )
  // @Patch( "/:id" )
  public async putOne( @ResponseParam() response : Response , @PathParams( "id" ) id : number , @BodyParams() entity : T ) : Promise<Response>
  {
    return super.putOne( response , id , entity ) ;
  }

  /** @param */
  @Post( "" )
  public async pstOne( @ResponseParam() response : Response , @BodyParams() entity : T ) : Promise<Response>
  {
    return super.pstOne( response , entity ) ;
  }

  /** @param */
  @Get( "" )
  public async getAll( @ResponseParam() response : Response ) : Promise<Response>
  {
    return super.getAll( response ) ;
  }

  /**
   * @param service
   */
  public constructor( public service : UserService )
  {
    super( service ) ;
  }

}
