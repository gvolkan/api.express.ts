/** @imports */
import { expect } from "../../../mocha" ;

import { Repository } from "typeorm" ;

import { User as T } from "../../users/user" ;
import { StoreService as Service } from "./store.service" ;

/** @tests */
describe( "store.service" , () =>
{
  /** @param */
  const service : Service = new Service() ;

  /** @cases */
  describe( "repository()" , () =>
  {
    it( "GET entity repository" , async () =>
    {
      const repository : Repository<T> = await service.repository<T>( "User" ) ;
      expect( repository.find ).to.be.a( "function" ) ;
    }) ;

    it( "GET entity repository from cache" , async () =>
    {
      const repository : Repository<T> = await service.repository<T>( "User" ) ;
      expect( repository.find ).to.be.a( "function" ) ;
    }) ;

  }) ;

  describe( "store()" , () =>
  {
    it( "SET close connection" , async () =>
    {
      await service.close() ;
    }) ;

    it( "SET close connection already complete" , async () =>
    {
      await service.close() ;
    }) ;

  }) ;

}) ;
