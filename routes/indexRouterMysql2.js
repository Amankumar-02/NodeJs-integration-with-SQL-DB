import { Router } from "express";
import {indexPage, getUsers } from '../controllers/indexControllerMysql2.js';


export const indexRouter = Router();


indexRouter.get('/', indexPage);
indexRouter.get('/users', getUsers);