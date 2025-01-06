import { readFileSync, writeFileSync } from "node:fs";
import { Errors } from "../type/enum/Errors";
class DatabaseConnection {
    static readJson() {
        try {
            this.file = readFileSync(this.url, "utf8");
            return JSON.parse(this.file);
        }
        catch (error) {
            throw new Error(Errors.ERROR_READING_DATABASE);
        }
    }
    ;
    static saveJson(json) {
        try {
            this.file = JSON.stringify(json, null, 2);
            writeFileSync(this.url, this.file, "utf-8");
        }
        catch (error) {
            throw new Error(Errors.ERROR_SAVING_DATA);
        }
    }
    ;
}
DatabaseConnection.url = "./src/model/database.json";
export default DatabaseConnection;
;
