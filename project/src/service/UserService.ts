import User from "../type/class/User.js";
import UserValidator from "../validator/UserValidator.js";

export default class UserService {
    public static listUser(id: string): User | null {
        UserValidator.isIdValid(id);
        
        return null;
    };
};