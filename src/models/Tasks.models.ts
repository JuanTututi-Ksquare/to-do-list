import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes, Sequelize } from 'sequelize';
import { DBConn } from './Index';

export class Tasks extends Model<InferAttributes<Tasks>, InferCreationAttributes<Tasks>>{
    declare id: CreationOptional<number>;
    declare name: string;
    declare date: Date;
    declare is_completed: CreationOptional<boolean>;
}

export const initTasksModel = (sequelize: Sequelize) => {
    Tasks.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: new DataTypes.STRING(150),
            allowNull: false
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        is_completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },
    {
        tableName: "tasks",
        sequelize: sequelize
    });

    Tasks.sync();
}