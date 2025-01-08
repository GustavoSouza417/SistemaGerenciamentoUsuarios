import UserService from "../../../service/UserService.js";
import User from "../../../type/class/User.js";
import iUser from "../../../type/interface/user/User.js";

export default {
    Query: {
        listUser(_: any, args: {id: string}): iUser | null {
            return UserService.listUser(args.id);
        },

        listUsers(): User[] | null {
            return null;
        }
    }
};