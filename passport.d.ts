import * as passport from "passport";
import { User as MyUser } from "./src/types/response"

declare global {
  namespace Express {
      export interface User extends MyUser{}
  }
}