/** @imports */
import { Post } from "ts-express-decorators" ;

import { Request } from "express" ;
import { Response } from "express" ;
import { Request as OAuthRequest } from "node-oauth2-server" ;
import { Response as OAuthResponse } from "node-oauth2-server" ;
import { Controller } from "ts-express-decorators" ;
import { Request as RequestParam } from "ts-express-decorators" ;
import { Response as ResponseParam } from "ts-express-decorators" ;

import { BearerToken } from "./datas/bearer.token" ;
import { OAuthService } from "./service/oauth.service" ;

/** @exports */
@Controller( "/oauth" )
export class OAuthController
{
  /** @param */
  @Post( "/token" )
  public async token( @RequestParam() request : Request , @ResponseParam() response : Response ) : Promise<BearerToken>
  {
    try {
      const oAuthRequest : OAuthRequest = new OAuthRequest( request ) ;
      const oAuthResponse : OAuthResponse = new OAuthResponse( response ) ;
      await OAuthService.token( oAuthRequest , oAuthResponse ) ;
      return oAuthResponse.body ;
    } finally {}

  }

}
