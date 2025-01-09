import UserService from "../../../service/user/UserService.js";
import User from "../../../type/class/user/User.js";
import iUser from "../../../type/interface/user/User.js";
import iProfile from "../../../type/interface/profile/Profile.js";
import InputCreateUser from "../../../type/interface/inputType/inputCreateUser/InputCreateUser.js";

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
        createUser(_: any, args: {user: InputCreateUser} ): User {
            return UserService.createUser(args.user);
        }
    }
};