/** @imports */
import * as OAuthServer from "node-oauth2-server" ;
import { Repository } from "typeorm" ;

import { OAUTH } from "../../../../etc/app/oauth" ;
import { StoreService } from "../../shared/store/store.service" ;
import { User } from "../../users/datas/user" ;
import { Client } from "../datas/client" ;
import { Token } from "../datas/token" ;

const OAuthStore : StoreService = new StoreService() ;
OAuthStore.key = "OAuth" ;

/** @exports */
export class OAuthHandlers
{
  /** @param */
  public static async getAccessToken( accessToken : string ) : Promise<Token|false>
  {
    try {
      const store : Repository<Token> = await OAuthStore.repository<Token>( "Token" ) ;
      const token : Token = await store.findOne({ accessToken }) ;
      return ( token ) ? token : false ;
    } finally {}

  }

  /** @param */
  public static async getClient( clientId : string , clientSecret : string ) : Promise<Client|false>
  {
    try {
      const store : Repository<Client> = await OAuthStore.repository<Client>( "Client" ) ;
      const client : Client = await store.findOne({ clientId , clientSecret }) ;
      return ( client ) ? client : false ;
    } finally {}

  }

  /** @param */
  public static async getUser( username : string , password : string ) : Promise<User|false>
  {
    try {
      const store : Repository<User> = await OAuthStore.repository<User>( "User" ) ;
      const user : User = await store.findOne({ username , password }) ;
      return ( user ) ? user : false ;
    } finally {}

  }

  /** @param */
  public static async saveToken( newToken : Token , client : Client , user : User ) : Promise<Token>
  {
    try {

      const token : Token = new Token() ;
      token.accessToken = newToken.accessToken ;
      token.accessTokenExpiresAt = newToken.accessTokenExpiresAt ;
      token.client = client.clientId ;
      token.user = user.username ;

      const store : Repository<Token> = await OAuthStore.repository<Token>( "Token" ) ;
      const oldTokens : Array<Token> = await store.find({ client : client.clientId , user : user.username }) ;
      await store.remove( oldTokens ) ;
      return await store.persist( token ) ;

    } finally {}

  }

}

export const OAuthService : OAuthServer = new OAuthServer
({
  model : OAuthHandlers ,
  refreshTokenLifetime : OAUTH.refreshExp ,
  accessTokenLifetime : OAUTH.accessExp ,
}) ;
