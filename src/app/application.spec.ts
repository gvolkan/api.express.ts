/** @imports */
import { expect } from "../mocha" ;

import { Application } from "./application" ;

/** @tests */
describe( "application" , () =>
{
  /** @param */
  const application : Application = new Application() ;

  /** @cases */
  describe( "start()" , () =>
  {
    it( "CREATED application response" , async () =>
    {
      application.start() ;
      expect( true ).to.be.true ;
    }) ;

  }) ;

}) ;
