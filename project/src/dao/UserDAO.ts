import DatabaseConnection from "../model/DatabaseConnection.js";
import User from "../type/class/user/User.js";
import iDatabase from "../type/interface/database/Database.js";
import iUser from "../type/interface/user/User.js";

export default class UserDAO {
    public static create(user: User): void {
        let json: iDatabase = DatabaseConnection.readJson();

        json.users["user" + user.getId] = {
            id: user.getId,
            cpf: user.getCpf,
            email: user.getEmail,
            name: user.getName,
            dateBirth: user.getDateBirth,
            password: user.getPassword,
            profile: user.getProfile
        };

        DatabaseConnection.saveJson(json);
    };

    public static listUser(id: string): iUser | null {
        let json: iDatabase = DatabaseConnection.readJson();

        return Object.values(json.users).find((user: iUser) =>
            user.id === id
        ) || null;
    };

    public static listUsers(): iUser[] {
        let json: iDatabase = DatabaseConnection.readJson();
        return Object.values(json.users);
    };

    public static update(id: string): void {
        id;
    };

    public static deleteUser(id: string): void {
        id;
    };

    public static deleteUsers(): void {

    };
};