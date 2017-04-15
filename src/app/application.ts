/** @imports */
import { resolve } from "path" ;
import { ServerLoader } from "ts-express-decorators" ;
import { ServerSettings as Annotation } from "ts-express-decorators" ;

import { API } from "../../etc/app/api" ;
import { CERTS } from "../../etc/app/certs" ;
import { COMMAND } from "../../etc/app/command" ;
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
      // .use( Middleware.urlencoded() )
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

  /** @param */
  public $onReady() : void
  {
    console.log( "" ) ;
    console.log( "Command : " ) ;
    console.log( COMMAND ) ;
    console.log( "" ) ;
  }

}
