import { taskRouter } from "./routes/Tasks.router";
import express from "express";
import dotenv from "dotenv";
import {DBConn} from "./models/Index";

dotenv.config();

const app = express()
app.use(express.json());

const port = process.env.PORT;
const db_name = <string>process.env.DB_NAME;
const db_user = <string>process.env.DB_USERNAME;
const db_pass = process.env.DB_PASSWORD;
const db_host = process.env.DB_HOST;

app.use("/task", taskRouter);

app.listen(port, async () => {
    console.log("Server started at port:", port);
    try {
        const sequelize = DBConn(db_name, db_user, db_pass, db_host).authenticate();
        console.log("Connection succesful!")
    } catch (error) {
        console.log(error);
    }
})