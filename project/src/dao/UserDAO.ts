import DatabaseConnection from "../model/DatabaseConnection";
import iDatabase from "../type/interface/database/Database";
import iUser from "../type/interface/user/User";

export default class UserDAO {
    public static create(user: iUser): void {
        user;
    };

    public static listUser(id: string): iUser | null {
        let json: iDatabase = DatabaseConnection.readJson();
        
        return Object.values(json.users).find((user: iUser) => {
            user.id === id
        }) || null;
    };

    public static listUsers(): iUser[] | null {
        return null;
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