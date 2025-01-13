import UserService from "../../../service/user/user-service.js";
import User from "../../../type/class/user/user.js";
import iUser from "../../../type/interface/user/user.js";
import iProfile from "../../../type/interface/profile/profile.js";
import InputCreateUser from "../../../type/interface/input-type/input-create-user/input-create-user.js";
import InputUpdateUser from "../../../type/interface/input-type/input-update-user/input-update-user.js";

export default {
    User: {
        profile(user: iUser): iProfile {
            return UserService.listProfile(user);
        }
    },

    Query: {
        listUser(_: any, args: {id: string}): iUser | null {
            return UserService.listUser(args.id);
        },

        listUsers(): iUser[] {
            return UserService.listUsers();
        }
    },

    Mutation: {
        createUser(_: any, args: {user: InputCreateUser}): User {
            return UserService.createUser(args.user);
        },

        updateUser(_: any, args: {user: InputUpdateUser}): User | null {
            return UserService.updateUser(args.user);
        },

        deleteUser(_: any, args: {id: string}): string {
            return UserService.deleteUser(args.id);
        },

        deleteUsers(): string {
            return UserService.deleteUsers();
        }
    }
};