/** @imports */
import { expect } from "../../mocha" ;

import { mockRes as Response } from "sinon-express-mock" ;

import { user } from "../../mocha/mocks/user" ;
import { RestCodes } from "../shared/rest/datas/rest.codes" ;
import { StoreService as Store } from "../shared/store/store.service" ;
import { UserController as Controller } from "./user.controller" ;
import { UserService as Service } from "./service/user.service" ;

/** @tests */
describe( "user.controller" , () =>
{
  /** @param */
  const store : Store = new Store() ;
  const service : Service = new Service( store ) ;
  const controller : Controller = new Controller( service ) ;
  const response : Response = new Response() ;

  /** @cases */
  describe( "pstOne()" , () =>
  {
    it( "201 Created response" , async () =>
    {
      const complete : Response = await controller.pstOne( response , user ) ;
      expect( response.status ).to.be.calledWith( RestCodes.Created ) ;
    }) ;

  }) ;

  describe( "getOne()" , () =>
  {
    it( "200 Success response" , async () =>
    {
      const complete : Response = await controller.getOne( response , user.id ) ;
      expect( response.status ).to.be.calledWith( RestCodes.Success ) ;
    }) ;

    it( "404 NotFound response" , async () =>
    {
      const complete : Response = await controller.getOne( response , user.id + 1 ) ;
      expect( response.status ).to.be.calledWith( RestCodes.NotFound ) ;
    }) ;

  }) ;

  describe( "putOne()" , () =>
  {
    it( "200 Success response" , async () =>
    {
      const complete : Response = await controller.putOne( response , user.id , user ) ;
      expect( response.status ).to.be.calledWith( RestCodes.Success ) ;
    }) ;

    it( "404 NotFound response" , async () =>
    {
      const complete : Response = await controller.putOne( response , user.id + 1 , user ) ;
      expect( response.status ).to.be.calledWith( RestCodes.NotFound ) ;
    }) ;

  }) ;

  describe( "getAll()" , () =>
  {
    it( "200 Success response" , async () =>
    {
      const complete : Response = await controller.getAll( response ) ;
      expect( response.status ).to.be.calledWith( RestCodes.Success ) ;
    }) ;

  }) ;

  describe( "delOne()" , () =>
  {
    it( "404 NotFound response" , async () =>
    {
      const complete : Response = await controller.delOne( response , user.id + 1 ) ;
      expect( response.status ).to.be.calledWith( RestCodes.NotFound ) ;
    }) ;

    it( "204 NoContent response" , async () =>
    {
      const complete : Response = await controller.delOne( response , user.id ) ;
      expect( response.status ).to.be.calledWith( RestCodes.NoContent ) ;
    }) ;

  }) ;

  describe( "repository" , () =>
  {
    it( "SET close connection" , async () =>
    {
      await store.store() ;
    }) ;

  }) ;

}) ;
