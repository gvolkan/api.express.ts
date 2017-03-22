/** @imports */
import { Response } from "express" ;
import { RestResponse } from "./rest/rest.response" ;
import { RestService } from "./rest/rest.service";

/** @exports */
export class RestController<T>
{
  /**
   * @param id
   * @param response
   */
  public async getOne( response : Response , id : number ) : Promise<Response>
  {
    const r : RestResponse<T> = new RestResponse<T>() ;
    const one : T|null = await this.service.getOne( id ) ;
    if ( !one ) { return r.send( response , r.NotFound() ) ; }
    return r.send( response , r.Success( one ) ) ;
  }

  /**
   * @param id
   * @param response
   */
  public async delOne( response : Response , id : number ) : Promise<Response>
  {
    const r : RestResponse<T> = new RestResponse<T>() ;
    const one : boolean|null = await this.service.delOne( id ) ;
    if ( !one ) { return r.send( response , r.NotFound() ) ; }
    return r.send( response , r.NoContent() ) ;
  }

  /**
   * @param id
   * @param response
   * @param entity
   */
  public async putOne( response : Response , id : number , entity : T ) : Promise<Response>
  {
    const r : RestResponse<T> = new RestResponse<T>() ;
    const one : T|null = await this.service.putOne( id , entity ) ;
    if ( !one ) { return r.send( response , r.NotFound() ) ; }
    return r.send( response , r.Success( one ) ) ;
  }

  /**
   * @param response
   * @param entity
   */
  public async pstOne( response : Response , entity : T ) : Promise<Response>
  {
    const r : RestResponse<T> = new RestResponse<T>() ;
    const one : T|null = await this.service.pstOne( entity ) ;
    return r.send( response , r.Created( one ) ) ;
  }

  /**
   * @param response
   */
  public async getAll( response : Response ) : Promise<Response>
  {
    const all : Array<T>|null = await this.service.getAll() ;
    const r : RestResponse<Array<T>> = new RestResponse<Array<T>>() ;
    // if ( !all ) { return r.send( response , r.NotFound() ) ; }
    return r.send( response , r.Success( all ) ) ;
  }

  /**
   * @param service
   */
  public constructor( public service : RestService<T> )
  {
    // constructor
  }

}
