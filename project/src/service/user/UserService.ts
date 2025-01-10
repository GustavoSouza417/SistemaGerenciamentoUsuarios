import UserDataValidator from "../../validator/user/UserDataValidator.js";
import UserExistsValidator from "../../validator/user/UserExistsValidator.js";
import UserDAO from "../../dao/user/UserDAO.js";
import Criptography from "../../security/user/Criptography.js";
import UserIsNoEmpty from "../../validator/user/UserIsNoEmpty.js";
import User from "../../type/class/user/User.js";
import iUser from "../../type/interface/user/User.js";
import iProfile from "../../type/interface/profile/Profile.js";
import InputCreateUser from "../../type/interface/inputType/inputCreateUser/InputCreateUser.js";
import InputUpdateUser from "../../type/interface/inputType/inputUpdateUser/InputUpdateUser.js";
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
        const user: User = new User();
        user.constructorCreate(userP);
        
        UserDataValidator.isCpfValid(user.getCpf);
        UserExistsValidator.thisCpfExists(user.getCpf);
        
        UserDataValidator.isEmailValid(user.getEmail);
        UserExistsValidator.thisEmailExists(user.getEmail);

        UserDataValidator.isNameValid(user.getName);
        UserDataValidator.isDateBirthValid(user.getDateBirth);
        UserDataValidator.isPasswordValid(user.getPassword);
        UserDataValidator.isProfileValid(user.getProfile);

        user.setPassword = Criptography.hashGenerator(user.getPassword);
        UserDAO.create(user);
        return user;
    };

    public static updateUser(userP: InputUpdateUser): User {
        const user: User = new User();

        UserDataValidator.isIdValid(userP.id);
        UserExistsValidator.thisIdNoExists(userP.id);
        user.constructorUpdate(UserService.listUser(userP.id)!);

        if(UserIsNoEmpty.stringIsNoEmpty(userP.name)) {
            UserDataValidator.isNameValid(userP.name!);
            user.setName = userP.name!;
        };

        if(UserIsNoEmpty.stringIsNoEmpty(userP.dateBirth)) {
            UserDataValidator.isDateBirthValid(userP.dateBirth!);
            user.setDateBirth = userP.dateBirth!;
        };

        if(UserIsNoEmpty.stringIsNoEmpty(userP.password)) {
            UserDataValidator.isPasswordValid(userP.password!);
            user.setPassword = userP.password!;
        };

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