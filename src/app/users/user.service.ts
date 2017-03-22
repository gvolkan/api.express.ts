/** @imports */
import { Service } from "ts-express-decorators" ;

import { RestService } from "../shared/rest/rest.service" ;
import { User as T } from "./user" ;

/** @exports */
@Service()
export class UserService extends RestService<T>
{
  /** @param  */
  public entity : string = "User" ;

}
