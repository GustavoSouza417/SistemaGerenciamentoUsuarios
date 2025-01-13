import UserDataValidator from "../../validator/user/user-data-validator.js";
import UserExistsValidator from "../../validator/user/user-exists-validator.js";
import UserDAO from "../../dao/user/user-dao.js";
import Criptography from "../../security/user/criptography.js";
import UserIsNoEmpty from "../../validator/user/user-is-no-empty.js";
import User from "../../type/class/user/user.js";
import iUser from "../../type/interface/user/user.js";
import iProfile from "../../type/interface/profile/profile.js";
import InputCreateUser from "../../type/interface/input-type/input-create-user/input-create-user.js";
import InputUpdateUser from "../../type/interface/input-type/input-update-user/input-update-user.js";
import { Profiles } from "../../type/enum/profiles/profiles.js";

export default class UserService {
    public static listProfile(user: iUser): iProfile {
        if(user.id === Profiles.ADMINISTRADOR)
            return { id: "1", name: "Administrator" };
        return { id: "2", name: "User" };
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