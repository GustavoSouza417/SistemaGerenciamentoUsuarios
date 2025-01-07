import UserService from "../../../service/UserService";
import User from "../../../type/class/User";

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