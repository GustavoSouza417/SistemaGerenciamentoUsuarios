import UserValidator from "../validator/UserValidator.js";
import UserDAO from "../dao/UserDAO.js";
// import User from "../type/class/User.js";
import iUser from "../type/interface/user/User.js";

export default class UserService {
    public static listUser(id: string): iUser | null {
        UserValidator.isIdValid(id);
        return UserDAO.listUser(id.trim());
    };
};