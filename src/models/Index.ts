import { Sequelize } from "sequelize";
import {initTasksModel} from "./Tasks.models"

export let sequelize: Sequelize;

const models = [initTasksModel];

export const DBConn = (db_name: string, db_username: string, db_password: string | undefined , db_host: string | undefined) => {
    const sequelize = new Sequelize(db_name, db_username, db_password, {
        host: db_host,
        dialect: "postgres",
        // logging: false
    })
    
    for (const model of models) {
        model(sequelize);
    }

    sequelize.sync({});

    return sequelize;
}