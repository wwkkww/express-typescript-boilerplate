import express, { Request, Response } from "express";
import session from "express-session";
// import { Request, Response } from "express-serve-static-core";
import { CreateUSerDto } from "../dtos/CreateUser.dto";
import { CreateUserQueryParams } from "../types/query-params";
import { User } from "../types/response";
import cookieParser from "cookie-parser";
import passport from "passport";


// Augment express-session with a custom SessionData object
declare module "express-session" {
  interface SessionData {
    user: User;
    name: string;
    email: string
  }
}


export function getUsers(request: Request, response: Response) {
  response.send([]);
}

export function getUserById(request: Request, response: Response) {
  response.send([]);
}

// request<Params, ResBody, ReqBody, ReqQuery, Locals>
export function createUser(
  request: Request<{ id: string }, {}, CreateUSerDto, CreateUserQueryParams>,
  response: Response<User>
) {
// export function createUser(request: Request, response: Response<User>) {
  request.params.id;
  request.body.email;
  request.query.loginAfterCreate;
  request.someCustomField;
  // request.userId;

  //** cookie-parser
  request.cookies;

  //** express-session
  request.session;
  request.sessionID;
  request.session?.user;
  request.session?.name;
  request.session!.email;

  //** passport seriallize user
  request.user;
  request.user?.id;
  request.user?.username;
  request.user?.email;
  // request.user?.someField

  return response.status(201).send({ id: 1, email: "test@test.com", username: "kevin" });
}
