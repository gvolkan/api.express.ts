/** @imports */
import { Response as Responses } from "express" ;

import { RestCodes } from "./rest.codes" ;
import { RESTMESSAGES } from "./rest.messages" ;
import { RestOutpt } from "./rest.outpt" ;

/** @exports */
export class RestResponse<T>
{
  /**
   * @param status
   * @param input
   */
  public outpt( status : number , input? : T ) : RestOutpt
  {
    const outpt : RestOutpt = new RestOutpt() ;
    if ( input ) { outpt.data =  input ; }
    outpt.message = RESTMESSAGES[ status ] ;
    outpt.status = status ;
    return outpt ;
  }

  /**
   * @param input
   */
  public Success( input? : T ) : RestOutpt
  {
    return this.outpt( RestCodes.Success , input ) ;
  }

  /**
   * @param input
   */
  public Created( input? : T ) : RestOutpt
  {
    return this.outpt( RestCodes.Created , input ) ;
  }

  /** @param */
  public NoContent() : RestOutpt
  {
    return this.outpt( RestCodes.NoContent ) ;
  }

  /** @param */
  public NotFound() : RestOutpt
  {
    return this.outpt( RestCodes.NotFound ) ;
  }

  /**
   * @param input
   */
  public ServerError( input? : T ) : RestOutpt
  {
    return this.outpt( RestCodes.ServerError , input ) ;
  }

  /**
   * @param status
   * @param response
   * @param input
   */
  public send( response : Responses , input : any ) : Responses
  {
    response.status( input.status ) ;
    response.send( ( input.data ) ? input : null ) ;
    return response ;
  }

}
