import { isCPF } from "validation-br";
import { Errors } from "../type/enum/errors/Errors.js";
import { Profiles } from "../type/enum/profiles/Profiles.js";

export default class UserValidator {
    //falta verificar se o ID já existe ou não
    public static isIdValid(id: string): void {
        const regex: RegExp = /^[0-9]+$/;
        
        if(typeof id !== "string")
            throw new Error(Errors.ERROR_INVALID_ID + ": tipo de dado inválido");
           
        id = id.trim();

        if(id.length < 1)
            throw new Error(Errors.ERROR_INVALID_ID + ": todo ID tem, ao menos, um caractere");

        if(!regex.test(id))
            throw new Error(Errors.ERROR_INVALID_ID + ": caracteres inválidos");
    };

    //falta verificar se o CPF já existe ou não
    //verificar se o campo de CPF está vazio
    public static isCpfValid(cpf: string): void {
        const regex: RegExp = /^[0-9]+$/;
        
        if(typeof cpf !== "string")
            throw new Error(Errors.ERROR_INVALID_CPF + ": tipo de dado inválido");            
            
        cpf = cpf.trim();

        if(cpf.length !== 11)
            throw new Error(Errors.ERROR_INVALID_CPF + ": todo CPF deve ter 11 caracteres");

        if(!regex.test(cpf))
            throw new Error(Errors.ERROR_INVALID_CPF + ": caracteres inválidos");
            
        if(!isCPF(cpf))
            throw new Error(Errors.ERROR_INVALID_CPF + ": CPF inválido");
    };

    //falta verificar se o e-mail já existe ou não
    //falta verificar se o e-mail não tem nenhum arroba
    //verificar se o campo de e-mail está vazio
    public static isEmailValid(email: string): void {
        const regex: RegExp = /^[a-zA-Z0-9.+-_%]+$/;
        
        if(typeof email !== "string")
            throw new Error(Errors.ERROR_INVALID_EMAIL + ": tipo de dado inválido");
        
        email = email.trim();
        email = email.toLowerCase();

        if(email.length < 11)
            throw new Error(Errors.ERROR_INVALID_EMAIL + ": todo e-mail tem, ao menos, 11 caracteres");

        if(email.length > 70)
            throw new Error(Errors.ERROR_INVALID_EMAIL + ": o tamanho do e-mail não pode exceder 70 caracteres");

        if((email.split("@").length - 1) !== 1) //verifica se há apenas um arroba no e-mail
            throw new Error(Errors.ERROR_INVALID_EMAIL + ": o e-mail só pode ter um arroba");
        
        if(!regex.test(email))
            throw new Error(Errors.ERROR_INVALID_EMAIL + ": caracteres inválidos");

        if(email.substring(email.length - 10) !== "@gmail.com") //verifica os últimos 10 dígitos do e-mail
            throw new Error(Errors.ERROR_INVALID_EMAIL + ": subdomínio de e-mail inválido");
    };

    public static isNameValid(name: string): void {
        const regex: RegExp = /^[a-zA-ZáâãÁÂÃéêÉÊíÍóôõÓÔÕúÚçÇ' ]+$/;
        const regexMultipleSpaces: RegExp = /  /;

        if(typeof name !== "string")
            throw new Error(Errors.ERROR_INVALID_NAME + ": tipo de dado inválido");

        name = name.trim();

        if(name.length < 1)
            throw new Error(Errors.ERROR_INVALID_NAME + ": o nome deve ter, ao menos, um caractere");

        if(name.length > 100)
            throw new Error(Errors.ERROR_INVALID_NAME + ": o tamanho do nome não pode exceder 100 caracteres");

        if(!regex.test(name))
            throw new Error(Errors.ERROR_INVALID_NAME + ": caracteres inválidos");

        if(regexMultipleSpaces.test(name))
            throw new Error(Errors.ERROR_INVALID_NAME + ": o nome informado contém múltiplos espaços seguidos");
    };

    //verificar se o campo data está vazio
    //colocar a data no sistema de data brasileiro
    public static isDateBirthValid(dateBirth: string): void {
        const regexCharacter: RegExp = /^[0-9/-\\]+$/;
        const regexFormat: RegExp = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
        
        const dateBirthTypeDate: Date = new Date(dateBirth);
        const today: Date = new Date();
        dateBirthTypeDate.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);

        if(typeof dateBirth !== "string")
            throw new Error(Errors.ERROR_INVALID_DATE_BIRTH + ": tipo de dado inválido");

        dateBirth = dateBirth.trim();

        if(dateBirth.length !== 10)
            throw new Error(Errors.ERROR_INVALID_DATE_BIRTH + ": o campo de data deve ter 10 caracteres");

        if(!regexCharacter.test(dateBirth))
            throw new Error(Errors.ERROR_INVALID_DATE_BIRTH + ": caracteres inválidos");

        if(!regexFormat.test(dateBirth))
            throw new Error(Errors.ERROR_INVALID_DATE_BIRTH + ": formato inválido");

        if(dateBirthTypeDate.getTime() > today.getTime())
            throw new Error(Errors.ERROR_INVALID_DATE_BIRTH + ": a data inserida está no futuro");
    };

    //verificar se o campo senha está vazio
    public static isPasswordValid(password: string): void {
        const regex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])[A-Za-z\d\W\s]+$/;

        if(typeof password !== "string")
            throw new Error(Errors.ERROR_INVALID_PASSWORD + ": tipo de dado inválido");

        password = password.trim();

        if(password.length < 8)
            throw new Error(Errors.ERROR_INVALID_PASSWORD + ": a senha deve ter, ao menos, 8 caracteres");

        if(!regex.test(password))
            throw new Error(Errors.ERROR_INVALID_PASSWORD + ": a senha deve conter, ao menos, um número, um caractere maiúsculo, um caractere minúsculo e um caractere especial");
    };

    //verificar se o campo perfil está vazio
    //verificar caracteres inválidos
    public static isProfileValid(profile: string): void {
        if(typeof profile !== "string")
            throw new Error(Errors.ERROR_INVALID_PROFILE + ": tipo de dado inválido");

        profile = profile.trim();

        if(profile !== Profiles.ADMINISTRADOR && profile !== Profiles.USUARIO)
            throw new Error(Errors.ERROR_INVALID_PROFILE + ": perfil inexistente");
    };
};