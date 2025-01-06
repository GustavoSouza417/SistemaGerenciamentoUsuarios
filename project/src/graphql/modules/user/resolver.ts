import iUser from "../../../type/interface/user/User";

export default {
    Query: {
        listUser(id: string): iUser | null {
            id;
            return null;
        },

        listUsers(): iUser[] | null {
            return null;
        }
    }
};