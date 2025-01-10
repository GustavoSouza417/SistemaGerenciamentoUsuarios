import UserDataValidator from "../../validator/user/UserDataValidator.js";
import UserExistsValidator from "../../validator/user/UserExistsValidator.js";
import UserDAO from "../../dao/user/UserDAO.js";
import User from "../../type/class/user/User.js";
import iUser from "../../type/interface/user/User.js";
import iProfile from "../../type/interface/profile/Profile.js";
import InputCreateUser from "../../type/interface/inputType/inputCreateUser/InputCreateUser.js";
import { Profiles } from "../../type/enum/profiles/Profiles.js";

export default class UserService {
    public static listProfile(user: iUser): iProfile {
        if(user.id === Profiles.ADMINISTRADOR)
            return { id: "1", name: "Administrador" };
        return { id: "2", name: "Usuário" };
    };

    public static listUser(id: string): iUser | null {
        UserDataValidator.isIdValid(id);
        return UserDAO.listUser(id.trim());
    };

    public static listUsers(): iUser[] {
        return UserDAO.listUsers();
    };

    public static createUser(userP: InputCreateUser): User {
        const user: User = new User(userP);
        
        UserDataValidator.isCpfValid(user.getCpf);
        UserExistsValidator.thisCpfExists(user.getCpf);
        
        UserDataValidator.isEmailValid(user.getEmail);
        UserExistsValidator.thisEmailExists(user.getEmail);

        UserDataValidator.isNameValid(user.getName);
        UserDataValidator.isDateBirthValid(user.getDateBirth);
        UserDataValidator.isPasswordValid(user.getPassword);
        UserDataValidator.isProfileValid(user.getProfile);

        UserDAO.create(user);
        return user;
    };

    public static deleteUser(id: string): string {
        UserDataValidator.isIdValid(id);
        UserExistsValidator.thisIdNoExists(id);
        UserDAO.deleteUser(id);
        return "Usuário excluído com sucesso!";
    };

    public static deleteUsers(): string {
        UserExistsValidator.areThereUsers();
        UserDAO.deleteUsers();            
        return "Usuários excluídos com sucesso!";
    };
};