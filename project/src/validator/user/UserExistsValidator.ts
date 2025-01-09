import UserDAO from "../../dao/user/UserDAO.js";
import { Errors } from "../../type/enum/errors/Errors.js";

export default class UserExistsValidator {
    public static thisIdExists(id: string): void {
        if(UserDAO.thisIdExists(id))
            throw new Error(Errors.ERROR_REGISTERED_ID);
    };

    public static thisIdNoExists(id: string): void {
        if(!UserDAO.thisIdExists(id))
            throw new Error(Errors.ERROR_NO_REGISTERED_ID);
    };

    public static thisCpfExists(cpf: string): void {
        if(UserDAO.thisCpfExists(cpf))
            throw new Error(Errors.ERROR_REGISTERED_CPF);
    };

    public static thisCpfNoExists(cpf: string): void {
        if(!UserDAO.thisCpfExists(cpf))
            throw new Error(Errors.ERROR_NO_REGISTERED_CPF);
    };

    public static thisEmailExists(email: string): void {
        if(UserDAO.thisEmailExists(email))
            throw new Error(Errors.ERROR_REGISTERED_EMAIL);
    };

    public static thisEmailNoExists(email: string): void {
        if(!UserDAO.thisEmailExists(email))
            throw new Error(Errors.ERROR_NO_REGISTERED_EMAIL);
    };
};