import UserValidator from "../validator/UserValidator.js";
import UserDAO from "../dao/UserDAO.js";
import User from "../type/class/user/User.js";
import iUser from "../type/interface/user/User.js";
import iProfile from "../type/interface/profile/Profile.js";
import InputCreateUser from "../type/interface/user/InputCreateUser.js";
import { Profiles } from "../type/enum/profiles/Profiles.js";
// import DatabaseConnection from "../model/DatabaseConnection.js";

export default class UserService {
    public static listProfile(user: iUser): iProfile {
        if(user.id === Profiles.ADMINISTRADOR)
            return { id: "1", name: "Administrador" };
        return { id: "2", name: "Usuário" };
    };

    public static listUser(id: string): iUser | null {
        UserValidator.isIdValid(id);
        return UserDAO.listUser(id.trim());
    };

    public static listUsers(): iUser[] {
        return UserDAO.listUsers();
    };

    public static createUser(userP: InputCreateUser): User {
        let user: User = new User(userP);
        
        UserValidator.isCpfValid(user.getCpf);
        UserValidator.isEmailValid(user.getEmail);
        UserValidator.isNameValid(user.getName);
        UserValidator.isDateBirthValid(user.getDateBirth);
        UserValidator.isPasswordValid(user.getPassword);
        UserValidator.isProfileValid(user.getProfile);

        // DatabaseConnection.autoincrement();
        UserDAO.create(user);
        return user;
    }
};