import iUser from "../user/User";
import iProfile from "../profile/Profile";

export default interface iDatabase {
    users: {
        [key: string]: iUser;
    },

    profiles: {
        [key: string]: iProfile;
    }
};