/** @imports */
import { Service } from "ts-express-decorators" ;

import { RestService } from "../../shared/rest/service/rest.service" ;
import { User as T } from "../datas/user" ;

/** @exports */
@Service()
export class UserService extends RestService<T>
{
  /** @param  */
  public entity : string = "User" ;

}
