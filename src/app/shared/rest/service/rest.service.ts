/** @imports */
import { Service } from "ts-express-decorators" ;
import { Repository } from "typeorm" ;

import { StoreService } from "../../store/store.service" ;

/** @exports */
@Service()
export class RestService<T>
{
  /** @param */
  public entity : string ;

  /** @param */
  public async repository() : Promise<Repository<T>>
  {
    return this.store.repository<T>( this.entity ) ;
  }

  /**
   * @param id
   */
  public async getOne( id : number ) : Promise<T|null>
  {
    try {
      const store : Repository<T> = await this.repository() ;
      const one : T = await store.findOne({ id : id }) ;
      if ( !one ) { return null ; }
      return one ;
    } finally {}

  }

  /**
   * @param id
   */
  public async delOne( id : number ) : Promise<boolean|null>
  {
    try {
      const store : Repository<T> = await this.repository() ;
      const one : T = await store.findOne({ id : id }) ;
      if ( !one ) { return null ; }
      const two : T = await store.remove( one ) ;
      return true ;
    } finally {}

  }

  /**
   * @param id
   * @param entity
   */
  public async putOne( id : number , entity : T ) : Promise<T|null>
  {
    try {
      const store : Repository<T> = await this.repository() ;
      const one : T = await store.findOne({ id : id }) ;
      if ( !one ) { return null ; }
      const two : T = store.merge( one , entity ) ;
      const three : T = await store.persist( two ) ;
      return three ;
    } finally {}

  }

  /**
   * @param entity
   */
  public async pstOne( entity : T ) : Promise<T|null>
  {
    try {
      const store : Repository<T> = await this.repository() ;
      const one : T = await store.persist( entity ) ;
      // if ( !one ) { return null ; }
      return one ;
    } finally {}

  }

  /** @param */
  public async getAll() : Promise<Array<T>|null>
  {
    try {
      const store : Repository<T> = await this.repository() ;
      const all : Array<T> = await store.find() ;
      // if ( !all.length ) { return null ; }
      return all ;
    } finally {}

  }

  /**
   * @param store
   */
  public constructor( public store : StoreService )
  {
    // constructor
  }

}
