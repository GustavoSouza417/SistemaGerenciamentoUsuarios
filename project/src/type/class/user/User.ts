import DatabaseConnection from "../../../model/database-connection.js";
import Criptography from "../../../security/user/criptography.js";
import iUser from "../../interface/user/user.js";
import InputCreateUser from "../../interface/input-type/input-create-user/input-create-user.js";

export default class User {
    protected id: string;
    protected cpf: string;
    protected email: string;
    protected name: string;
    protected dateBirth: string;
    protected password: string;
    protected profile: string;

    public constructor() {
        this.id = "";
        this.cpf = "";
        this.email = "";
        this.name = "";
        this.dateBirth = "";
        this.password = "";
        this.profile = "";
    };

    public constructorCreate(user: InputCreateUser) {
        this.setId = DatabaseConnection.autoincrement();
        this.setCpf = user.cpf;
        this.setEmail = user.email;
        this.setName = user.name;
        this.setDateBirth = user.dateBirth;
        this.password = user.password;
        this.setProfile = user.profile;
    };

    public constructorUpdate(user: iUser) {
        this.setId = user.id;
        this.setCpf = user.cpf;
        this.setEmail = user.email;
        this.setName = user.name;
        this.setDateBirth = user.dateBirth;
        this.password = user.password;
        this.setProfile = user.profile;
    };

    //getters
    public get getId(): string {
        return this.id;
    };

    public get getCpf(): string {
        return this.cpf;
    };

    public get getEmail(): string {
        return this.email;
    };

    public get getName(): string {
        return this.name;
    };

    public get getDateBirth(): string {
        return this.dateBirth;
    };

    public get getPassword(): string {
        return this.password;
    };

    public get getProfile(): string {
        return this.profile;
    };

    //setters
    private set setId(id: string) {
        this.id = id;
    };

    private set setCpf(cpf: string) {
        this.cpf = cpf;
    };

    private set setEmail(email: string) {
        this.email = email;
    };

    public set setName(name: string) {
        this.name = name;
    };

    public set setDateBirth(dateBirth: string) {
        this.dateBirth = dateBirth;
    };

    public set setPassword(password: string) {
        this.password = Criptography.hashGenerator(password);
    };

    public set setProfile(profile: string) {
        this.profile = profile;
    };
};