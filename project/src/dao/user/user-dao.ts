import DatabaseConnection from "../../model/database-connection.js";
import User from "../../type/class/user/user.js";
import iDatabase from "../../type/interface/database/database.js";
import iUser from "../../type/interface/user/user.js";

export default class UserDAO {
    public static create(user: User): void { //também serve para update
        const json: iDatabase = DatabaseConnection.readJson();

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
        const json: iDatabase = DatabaseConnection.readJson();

        return Object.values(json.users).find((user: iUser) =>
            user.id === id
        ) || null;
    };

    public static listUsers(): iUser[] {
        const json: iDatabase = DatabaseConnection.readJson();
        return Object.values(json.users);
    };

    public static deleteUser(id: string): void {
        const json: iDatabase = DatabaseConnection.readJson();
        delete json.users["user" + id];
        DatabaseConnection.saveJson(json);
    };

    public static deleteUsers(): void {
        const json: iDatabase = DatabaseConnection.readJson();
        let key: string;

        for(key in json.users)
            delete json.users[key];
        
        DatabaseConnection.saveJson(json);
    };

    public static thisIdExists(id: string): boolean {
        const json: iDatabase = DatabaseConnection.readJson();

        return Object.values(json.users).some((user: iUser) => 
            user.id === id
        );
    };

    public static thisCpfExists(cpf: string): boolean {
        const json: iDatabase = DatabaseConnection.readJson();

        return Object.values(json.users).some((user: iUser) => 
            user.cpf === cpf
        );
    };

    public static thisEmailExists(email: string): boolean {
        const json: iDatabase = DatabaseConnection.readJson();

        return Object.values(json.users).some((user: iUser) => 
            user.email === email
        );
    };
};