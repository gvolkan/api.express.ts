/** @imports */
import { json } from "body-parser" ;
import { urlencoded } from "body-parser" ;
import { ErrorRequestHandler } from "express" ;
import { RequestHandler } from "express" ;
import { NextFunction } from "express" ;
import { Response } from "express" ;
import { Request } from "express" ;
import { logger } from "express-winston" ;
import { requestWhitelist } from "express-winston" ;
import { responseWhitelist } from "express-winston" ;
import * as StrongErrorHandler from "strong-error-handler" ;
import { transports } from "winston" ;

import { CORS } from "../../../etc/app/cors" ;
import { DEBUG } from "../../../etc/app/debug" ;

/** @exports */
export class Middleware
{
  /** @param */
  public static json() : RequestHandler
  {
    return json() ;
  } ;

  /** @param */
  public static urlencoded() : RequestHandler
  {
    return urlencoded({ extended : true }) ;
  } ;

  /** @param */
  public static cors() : RequestHandler
  {
    return ( request : Request , response : Response , next : NextFunction ) : void =>
    {
      response.header( "Access-Control-Allow-Origin" , CORS.origins ) ;
      response.header( "Access-Control-Allow-Headers" , CORS.headers ) ;
      response.header( "Access-Control-Allow-Methods" , CORS.methods ) ;
      next() ; return ;
    } ;

  }

  /** @param */
  public static error() : ErrorRequestHandler
  {
    return StrongErrorHandler({ debug : DEBUG , log : true }) ;
  } ;

  /** @param */
  public static logger() : ErrorRequestHandler
  {
    requestWhitelist.push( "body" ) ;
    responseWhitelist.push( "body" ) ;

    return logger
    ({
      meta : true ,
      colorStatus : false ,
      expressFormat : true ,

      transports :
      [
        new transports.Console
        ({
          json : false ,
          stringify : false ,
          timestamp : true ,
          prettyPrint : true ,
          colorize : false ,
          level : "debug" ,
        }) ,
      ] ,

    }) ;

  } ;

}
