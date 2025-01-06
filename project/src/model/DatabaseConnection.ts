import { readFileSync, writeFileSync } from "node:fs";
import iDatabase from "../type/interface/database/Database";
import { Errors } from "../type/enum/Errors";

export default class DatabaseConnection {
    private static readonly url: string = "./src/model/database.json";
    private static file: string;

    public static readJson(): iDatabase {
        try {
            this.file = readFileSync(this.url, "utf8");
            return JSON.parse(this.file);
        } catch(error: unknown) {
            throw new Error(Errors.ERROR_READING_DATABASE);
        }
    };

    public static saveJson(json: iDatabase): void {
        try {
            this.file = JSON.stringify(json, null, 2);
            writeFileSync(this.url, this.file, "utf-8");
        } catch(error: unknown) {
            throw new Error(Errors.ERROR_SAVING_DATA);
        }
    };
};