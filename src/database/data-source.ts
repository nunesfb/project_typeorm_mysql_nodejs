import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateUsersTable1674307725393 } from './migrations/1674307725393-CreateUsersTable';
import User from "../app/entities/User";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "project_typeorm",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [CreateUsersTable1674307725393],
    subscribers: [],
})
