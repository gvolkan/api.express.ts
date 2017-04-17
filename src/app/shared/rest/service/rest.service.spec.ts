/** @imports */
import { expect } from "../../../../mocha" ;

import { mockRes as Response } from "sinon-express-mock" ;
import { Repository } from "typeorm" ;

import { user } from "../../../../mocha/mocks/user" ;
import { User as T } from "../../../users/datas/user" ;
import { StoreService as Store } from "../../store/store.service" ;
import { RestService as Service } from "./rest.service" ;

/** @tests */
describe( "rest.service" , () =>
{
  /** @param */
  const store : Store = new Store() ;
  const service : Service<T> = new Service<T>( store ) ;
  const response : Response = new Response() ;
  service.entity = "User" ;

  /** @cases */
  describe( "repository()" , () =>
  {
    it( "GET entity repository" , async () =>
    {
      const repository : Repository<T> = await service.repository() ;
      expect( repository.find ).to.be.a( "function" ) ;
    }) ;

  }) ;

  describe( "pstOne()" , () =>
  {
    it( "201 Created response" , async () =>
    {
      const outpt : T = await service.pstOne( user ) ;
      expect( outpt.username ).to.be.equal( user.username ) ;
    }) ;

  }) ;

  describe( "getOne()" , () =>
  {
    it( "200 Success response" , async () =>
    {
      const outpt : T = await service.getOne( user.id ) ;
      expect( outpt.username ).to.be.equal( user.username ) ;
    }) ;

    it( "404 NotFound response" , async () =>
    {
      const outpt : T|null = await service.getOne( user.id + 1 ) ;
      expect( outpt ).to.be.null ;
    }) ;

  }) ;

  describe( "putOne()" , () =>
  {
    it( "200 Success response" , async () =>
    {
      const outpt : T = await service.putOne( user.id , user ) ;
      expect( outpt.username ).to.be.equal( user.username ) ;
    }) ;

    it( "404 NotFound response" , async () =>
    {
      const outpt : T|null = await service.putOne( user.id + 1 , user ) ;
      expect( outpt ).to.be.null ;
    }) ;

  }) ;

  describe( "getAll()" , () =>
  {
    it( "200 Success response" , async () =>
    {
      const outpt : Array<T> = await service.getAll() ;
      expect( outpt.length ).to.be.greaterThan( 1 ) ;
    }) ;

  }) ;

  describe( "delOne()" , () =>
  {
    it( "404 NotFound response" , async () =>
    {
      const outpt : boolean|null = await service.delOne( user.id + 1 ) ;
      expect( outpt ).to.be.null ;
    }) ;

    it( "204 NoContent response" , async () =>
    {
      const outpt : boolean = await service.delOne( user.id ) ;
      expect( outpt ).to.be.true ;
    }) ;

  }) ;

  describe( "repository" , () =>
  {
    it( "SET close connection" , async () =>
    {
      await store.close() ;
    }) ;

  }) ;

}) ;
