import iUser from "../user/User.js";
import iProfile from "../profile/Profile.js";

export default interface iDatabase {
    users: {
        [key: string]: iUser;
    },

    profiles: {
        [key: string]: iProfile;
    }
};