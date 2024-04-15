import * as express from "express-serve-static-core";
// import express from "express";
import { User } from "../../src/types/response";

// option 1
declare global {
  namespace Express {
    interface Request {
      someCustomField?: string;
    }
  }
}

// option 2
// declare module "express-serve-static-core" {
//   interface Request {
//     userId?: number
//   }
// }