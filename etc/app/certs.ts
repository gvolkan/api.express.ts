/** @imports */
import { readFileSync } from "fs" ;

/** @exports */
export const CERTS : any =
{
  key : readFileSync( "./etc/certs/certs.rsa.pem" ) ,
  cert : readFileSync( "./etc/certs/certs.crt.pem" ) ,
  passcode : "" ,
} ;
