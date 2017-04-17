/** @imports */
import { Get } from "ts-express-decorators" ;
import { Delete } from "ts-express-decorators" ;
import { Patch } from "ts-express-decorators" ;
import { Post } from "ts-express-decorators" ;
import { Put } from "ts-express-decorators" ;

import { Response } from "express" ;
import { Authenticated } from "ts-express-decorators" ;
import { BodyParams } from "ts-express-decorators" ;
import { Controller } from "ts-express-decorators" ;
import { PathParams } from "ts-express-decorators" ;
import { Response as ResponseParam } from "ts-express-decorators" ;

import { RestController } from "../shared/rest/rest.controller" ;
import { User as T } from "./datas/user" ;
import { UserService } from "./service/user.service" ;

/** @exports */
@Controller( "/user" )
export class UserController extends RestController<T>
{
  /** @param */
  @Get( "/:id" )
  @Authenticated()
  public async getOne( @ResponseParam() response : Response , @PathParams( "id" ) id : number ) : Promise<Response>
  {
    return super.getOne( response , id ) ;
  }

  /** @param */
  @Delete( "/:id" )
  @Authenticated()
  public async delOne( @ResponseParam() response : Response , @PathParams( "id" ) id : number ) : Promise<Response>
  {
    return super.delOne( response , id ) ;
  }

  /** @param */
  @Put( "/:id" )
  // @Patch( "/:id" )
  @Authenticated()
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
  @Authenticated()
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
