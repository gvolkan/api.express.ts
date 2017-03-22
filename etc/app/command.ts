/** @imports */
import { GroupedOutput } from "command-line-args" ;
import * as CommandLineArgs from "command-line-args" ;

/** @exports */
export const COMMAND : GroupedOutput = CommandLineArgs
([
  { name : "http" , defaultValue : "3080" , type : String } ,
  { name : "https" , defaultValue : "3443" , type : String } ,
  { name : "host" , defaultValue : "0.0.0.0" , type : String } ,

  { name : "bail" , type : Boolean } ,
  { name : "compilers" , type : String } ,
  { name : "full-trace" , type : Boolean } ,
  { name : "require" , type : String } ,

]) ;
