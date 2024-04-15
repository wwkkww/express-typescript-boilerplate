import express, { NextFunction, Request, Response } from 'express';
import userRouter from './routes/users';
import session from "express-session";
// import passport from "passport";

const app = express();

const PORT = 3000;

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  }),
);
app.get('/', (req, res) => {
  const user = { id: '1' };
  // req.session!.userId = user.id;
  // req.session?._user
});


// this middleware will add to the request.locale = 'en'
app.use((req: Request, res: Response, next: NextFunction) => {
  // this is bad
  // (req as any).locale = "en";

  req.locale = "en"

  next()
})

app.use('/api/users', userRouter)

app.use('/', (req: Request, res: Response) => { res.send("ok")})

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`)
})
