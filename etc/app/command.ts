/** @imports */
import { GroupedOutput } from "command-line-args" ;
import * as CommandLineArgs from "command-line-args" ;

/** @exports */
export const COMMAND : GroupedOutput = CommandLineArgs
([
  { name : "http" ,       type : String ,  defaultValue : "3080"    } ,
  { name : "https" ,      type : String ,  defaultValue : "3443"    } ,
  { name : "host" ,       type : String ,  defaultValue : "0.0.0.0" } ,

  { name : "debug" ,      type : Boolean , defaultValue : true      } ,

  { name : "bail" ,       type : Boolean } ,
  { name : "compilers" ,  type : String  } ,
  { name : "full-trace" , type : Boolean } ,
  { name : "require" ,    type : String  } ,

]) ;
