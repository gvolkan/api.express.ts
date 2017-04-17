/** @imports */
import { Connection } from "typeorm" ;
import { Repository } from "typeorm" ;
import { createConnection } from "typeorm" ;

import { Service } from "ts-express-decorators" ;

import { STORE } from "../../../../etc/app/store" ;
import { Client } from "../../auths/datas/client" ;
import { Token } from "../../auths/datas/token" ;
import { User } from "../../users/datas/user" ;

/** @exports */
@Service()
export class StoreService
{
  /** @param */
  protected dbc : Connection ;

  /** @param */
  public key : string = "Store" ;

  /** @param */
  public async store() : Promise<Connection>
  {
    if ( !this.dbc ) {

      this.dbc = await createConnection
      ({
        driver : STORE ,
        name : this.key ,
        // autoSchemaSync : true ,
        entities :
        [
          Client ,
          Token ,
          User ,
        ] ,

      }) ;

    }

    return this.dbc ;

  }

  /**
   * @param input
   */
  public async repository<T>( input : string ) : Promise<Repository<T>>
  {
    try {
      const store : Connection = await this.store() ;
      return store.getRepository<T>( input ) ;
    } finally {}

  }

  /** @param */
  public async close() : Promise<void>
  {
    if ( this.dbc ) {
      await this.dbc.close() ;
      this.dbc = null ;
    }

  }

}
