import UserService from "../../../service/UserService.js";
// import User from "../../../type/class/User.js";
import iUser from "../../../type/interface/user/User.js";
import iProfile from "../../../type/interface/profile/Profile.js";

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
    }
};