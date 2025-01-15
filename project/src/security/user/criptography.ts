import { createHash, Hash } from "crypto";

export default class Criptography {
    public static hashGenerator(password: string): string {
        const hash: Hash = createHash("sha512");
        hash.update(password);
        return hash.digest("hex");
    };
};
