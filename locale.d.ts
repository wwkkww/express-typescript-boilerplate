
// tell typescript to add locale property to Request type from express using declaration merging
import * as express from 'express';

declare global {
  namespace Express {
    interface Request {
      locale?: 'en' | 'bm' | 'cn'
    }
  }
}