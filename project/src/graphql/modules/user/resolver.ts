import UserService from "../../../service/UserService.js";
import User from "../../../type/class/User.js";

export default {
    Query: {
        listUser(id: string): User | null {
            return UserService.listUser(id);
        },

        listUsers(): User[] | null {
            return null;
        }
    }
};