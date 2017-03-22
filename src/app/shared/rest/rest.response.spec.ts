/** @imports */
import { expect } from "../../../mocha" ;

import { mockRes as Response } from "sinon-express-mock" ;

import { RestCodes } from "./rest.codes" ;
import { RESTMESSAGES } from "./rest.messages" ;
import { RestOutpt } from "./rest.outpt" ;
import { RestResponse } from "./rest.response" ;

/** @tests */
describe( "rest.response" , () =>
{
  /** @param */
  const response : Response = new Response() ;
  const service : RestResponse<any> = new RestResponse<any>() ;

  /** @cases */
  describe( "outpt()" , () =>
  {
    it( "200 Success status" , async () =>
    {
      const outpt : RestOutpt = service.outpt( RestCodes.Success ) ;
      expect( outpt.status ).to.be.equal( RestCodes.Success ) ;
    }) ;

    it( "200 Success message" , async () =>
    {
      const outpt : RestOutpt = service.outpt( RestCodes.Success ) ;
      expect( outpt.message ).to.be.equal( RESTMESSAGES[ RestCodes.Success ] ) ;
    }) ;

    it( "200 Success data" , async () =>
    {
      const outpt : RestOutpt = service.outpt( RestCodes.Success , 1 ) ;
      expect( outpt.data ).to.be.equal( 1 ) ;
    }) ;

  }) ;

  describe( "Success()" , () =>
  {
    it( "200 Success response" , async () =>
    {
      const outpt : RestOutpt = service.Success( 1 ) ;
      expect( outpt.status ).to.be.equal( RestCodes.Success ) ;
    }) ;

  }) ;

  describe( "Created()" , () =>
  {
    it( "201 Created response" , async () =>
    {
      const outpt : RestOutpt = service.Created( 1 ) ;
      expect( outpt.status ).to.be.equal( RestCodes.Created ) ;
    }) ;

  }) ;

  describe( "NoContent()" , () =>
  {
    it( "204 NoContent response" , async () =>
    {
      const outpt : RestOutpt = service.NoContent() ;
      expect( outpt.status ).to.be.equal( RestCodes.NoContent ) ;
    }) ;

  }) ;

  describe( "NotFound()" , () =>
  {
    it( "404 NotFound response" , async () =>
    {
      const outpt : RestOutpt = service.NotFound() ;
      expect( outpt.status ).to.be.equal( RestCodes.NotFound ) ;
    }) ;

  }) ;

  describe( "ServerError()" , () =>
  {
    it( "500 ServerError response" , async () =>
    {
      const outpt : RestOutpt = service.ServerError( 1 ) ;
      expect( outpt.status ).to.be.equal( RestCodes.ServerError ) ;
    }) ;

  }) ;

  describe( "send()" , () =>
  {
    it( "200 Success response" , async () =>
    {
      const outpt : RestOutpt = service.Success( 1 ) ;
      const complete : Response = service.send( response , outpt ) ;
      expect( response.send ).to.be.calledWith( outpt ) ;
    }) ;

    it( "204 NoContent response" , async () =>
    {
      const outpt : RestOutpt = service.NoContent() ;
      const complete : Response = service.send( response , outpt ) ;
      expect( response.send ).to.be.calledWith( null ) ;
    }) ;

  }) ;

}) ;
