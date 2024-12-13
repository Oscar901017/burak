import express from  'express';
import path from "path";
import router from "./routar";
import routerAdmin from './routarAdmin';
import morgan from "morgan";
import { MORGAN_FORMAT } from './libs/config';

/** 1- ENTERANCE **/

const app = express();
console.log("__dirname:",__dirname)

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan (MORGAN_FORMAT));
/** 2- SESSION **/

/** 3- VIEWS **/
app.set('views',path.join(__dirname, 'views'));
app.set("view engine", "ejs");

/** 4- ROUTERS **/

app.use('/admin', routerAdmin);   // BSSR =>> Ejs da quramiz
app.use('/', router);  // SPA =>> REACT da quramiz

export default app;  // module.exports mantig'i bilan bir xil
