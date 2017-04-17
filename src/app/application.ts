/** @imports */
import { resolve } from "path" ;
import { ServerLoader } from "ts-express-decorators" ;
import { ServerSettings as Annotation } from "ts-express-decorators" ;

import { Request } from "express" ;
import { Response } from "express" ;
import { NextFunction } from "express" ;
import { Request as OAuthRequest } from "node-oauth2-server" ;
import { Response as OAuthResponse } from "node-oauth2-server" ;

import { API } from "../../etc/app/api" ;
import { CERTS } from "../../etc/app/certs" ;
import { COMMAND } from "../../etc/app/command" ;

import { OAuthService } from "./auths/service/oauth.service" ;
import { Middleware } from "./cores/middleware" ;

const ROOTS : string = resolve( __dirname ) ;

/** @exports */
@Annotation
({
  rootDir : ROOTS ,
  env : "development" ,
  acceptMimes : [ "application/json" ] ,
  componentsScan : [ `${ROOTS}/**/*.service.ts` ] ,
  mount : { [ API.v1 ] : `${ROOTS}/**/*.controller.ts` } ,
  httpsOptions : CERTS ,
  httpsPort : COMMAND.https ,
  port : COMMAND.http ,
})
export class Application extends ServerLoader
{
  /**
   * @param error
   */
  public $onServerInitError( error : Error ) : void
  {
    console.log( error ) ;
  }

  /** @param */
  public $onMountingMiddlewares() : Promise<any>|void
  {
    this
      .use( Middleware.cors() )
      .use( Middleware.urlencoded() )
      .use( Middleware.json() )
      .use( Middleware.logger() )
      ;
  }

  /** @param */
  public $afterRoutesInit() : void
  {
    this
      .use( Middleware.error() )
      ;
  }

  /**
   * @param request
   * @param response
   * @param next
   * @param roles
   */
  public $onAuth( request : Request , response : Response , next : NextFunction , roles? : Array<string> ) : void
  {
    const oAuthRequest : OAuthRequest = new OAuthRequest( request ) ;
    const oAuthResponse : OAuthResponse = new OAuthResponse( response ) ;

    OAuthService
      .authenticate( oAuthRequest , oAuthResponse )
      .then( ( o : any ) =>
      {
        next( true ) ;
      })
      .catch( ( e : Error ) =>
      {
        next( false ) ;
      })
      ;
  }

  /** @param */
  public $onReady() : void
  {
    console.log( "" ) ;
    console.log( "Command : " ) ;
    console.log( COMMAND ) ;
    console.log( "" ) ;
  }

}
