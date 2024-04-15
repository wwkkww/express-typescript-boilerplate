import * as express from "express";
import { User } from "../../src/types/response";

declare module "express-session" {
  export interface SessionData {
    username: string;
    role: string;
  }
}


// declare global {
//   namespace Express {
//     export interface Session {
//       _user?: User
//     }

//     export interface Request {
//       SessionData: {
//         userId?: string
//         username?: string
//       } 
//     }
//   }
// }