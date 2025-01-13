import { isCPF } from "validation-br";
import { Errors } from "../../type/enum/errors/errors.js";
import { Profiles } from "../../type/enum/profiles/profiles.js";

export default class UserDataValidator {
    public static isIdValid(id: string): void {
        const regex: RegExp = /^[0-9]+$/;
        
        if(typeof id !== "string")
            throw new Error(Errors.ERROR_INVALID_ID + ": invalid data type");

        id = id.trim();

        if(id.length < 1)
            throw new Error(Errors.ERROR_INVALID_ID + ": every ID has at least one numeric character");

        if(!regex.test(id))
            throw new Error(Errors.ERROR_INVALID_ID + ": invalid characters");
    };

    public static isCpfValid(cpf: string): void {
        const regex: RegExp = /^[0-9]+$/;
        
        if(typeof cpf !== "string")
            throw new Error(Errors.ERROR_INVALID_CPF + ": invalid data type");            
            
        cpf = cpf.trim();

        if(cpf === "")
            throw new Error(Errors.ERROR_INVALID_CPF + ": empty field");

        if(cpf.length !== 11)
            throw new Error(Errors.ERROR_INVALID_CPF + ": every CPF must have 11 characters");

        if(!regex.test(cpf))
            throw new Error(Errors.ERROR_INVALID_CPF + ": invalid characters");
            
        if(!isCPF(cpf))
            throw new Error(Errors.ERROR_INVALID_CPF + ": invalid CPF");
    };

    public static isEmailValid(email: string): void {
        const regex: RegExp = /^[a-zA-Z0-9.+-_%]+$/;
        const regexHaveAtSymbol: RegExp = /[@]/;
        
        if(typeof email !== "string")
            throw new Error(Errors.ERROR_INVALID_EMAIL + ": invalid data type");
        
        email = email.trim();
        email = email.toLowerCase();

        if(email === "")
            throw new Error(Errors.ERROR_INVALID_EMAIL + ": empty field");

        if(email.length < 11)
            throw new Error(Errors.ERROR_INVALID_EMAIL + ": every email must have at least 11 characters");

        if(email.length > 70)
            throw new Error(Errors.ERROR_INVALID_EMAIL + ": the email length cannot exceed 70 characters");

        if(!regexHaveAtSymbol.test(email))
            throw new Error(Errors.ERROR_INVALID_EMAIL + ": every email must have an \"@\" symbol");

        if((email.split("@").length - 1) !== 1) //check if there is only one "@" in the email
            throw new Error(Errors.ERROR_INVALID_EMAIL + ": the email can only have one \"@\" symbol");
        
        if(!regex.test(email))
            throw new Error(Errors.ERROR_INVALID_EMAIL + ": invalid characters");

        if(email.substring(email.length - 10) !== "@gmail.com") //check the last 10 characters of the email
            throw new Error(Errors.ERROR_INVALID_EMAIL + ": invalid email subdomain");
    };

    public static isNameValid(name: string): void {
        const regex: RegExp = /^[a-zA-ZáâãÁÂÃéêÉÊíÍóôõÓÔÕúÚçÇ' ]+$/;
        const regexMultipleSpaces: RegExp = /  /;

        if(typeof name !== "string")
            throw new Error(Errors.ERROR_INVALID_NAME + ": invalid data type");

        name = name.trim();

        if(name.length < 1)
            throw new Error(Errors.ERROR_INVALID_NAME + ": the name must have at least one character");

        if(name.length > 100)
            throw new Error(Errors.ERROR_INVALID_NAME + ": the name length cannot exceed 100 characters");

        if(!regex.test(name))
            throw new Error(Errors.ERROR_INVALID_NAME + ": invalid characters");

        if(regexMultipleSpaces.test(name))
            throw new Error(Errors.ERROR_INVALID_NAME + ": the provided name contains multiple consecutive spaces");
    };

    public static isDateBirthValid(dateBirth: string): void {
        const regexCharacter: RegExp = /^[0-9/-]+$/;
        const regexFormat: RegExp = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

        if(typeof dateBirth !== "string")
            throw new Error(Errors.ERROR_INVALID_DATE_BIRTH + ": invalid data type");

        dateBirth = dateBirth.trim();

        if(dateBirth === "")
            throw new Error(Errors.ERROR_INVALID_DATE_BIRTH + ": empty field");

        if(dateBirth.length !== 10)
            throw new Error(Errors.ERROR_INVALID_DATE_BIRTH + ": the date field must have 10 characters");

        if(!regexCharacter.test(dateBirth))
            throw new Error(Errors.ERROR_INVALID_DATE_BIRTH + ": invalid characters");

        if(!regexFormat.test(dateBirth))
            throw new Error(Errors.ERROR_INVALID_DATE_BIRTH + ": invalid format");

        const dateBirthArray: string[] = dateBirth.split("/");
        const today: Date = new Date();

        if((today.getFullYear() - parseInt(dateBirthArray[2]!)) > 125)
            throw new Error(Errors.ERROR_INVALID_DATE_BIRTH + ": there are no living people with that age");
        
        const dateBirthAmericanFormat: string = dateBirthArray[1] + "/" + dateBirthArray[0] + "/" + dateBirthArray[2];
        const dateBirthTypeDate: Date = new Date(dateBirthAmericanFormat);
        dateBirthTypeDate.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);

        if(dateBirthTypeDate.getTime() > today.getTime())
            throw new Error(Errors.ERROR_INVALID_DATE_BIRTH + ": the entered date is in the future");
    };

    public static isPasswordValid(password: string): void {
        const regex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])[A-Za-z\d\W\s]+$/;

        if(typeof password !== "string")
            throw new Error(Errors.ERROR_INVALID_PASSWORD + ": invalid data type");

        password = password.trim();

        if(password === "")
            throw new Error(Errors.ERROR_INVALID_PASSWORD + ": empty field");

        if(password.length < 8)
            throw new Error(Errors.ERROR_INVALID_PASSWORD + ": the password must have at least 8 characters");

        if(!regex.test(password))
            throw new Error(Errors.ERROR_INVALID_PASSWORD + ": the password must contain at least one number, one uppercase letter, one lowercase letter, and one special character");
    };

    public static isProfileValid(profile: string): void {
        if(typeof profile !== "string")
            throw new Error(Errors.ERROR_INVALID_PROFILE + ": invalid data type");

        profile = profile.trim();

        if(profile === "")
            throw new Error(Errors.ERROR_INVALID_PROFILE + " empty field");

        if(profile !== Profiles.ADMINISTRADOR && profile !== Profiles.USUARIO)
            throw new Error(Errors.ERROR_INVALID_PROFILE + ": non-existent profile");
    };
};