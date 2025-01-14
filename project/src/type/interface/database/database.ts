import iUser from "../user/user.js";
import iProfile from "../profile/profile.js";

export default interface iDatabase {
    users: {
        [key: string]: iUser;
    },

    profiles: {
        [key: string]: iProfile;
    }
};
