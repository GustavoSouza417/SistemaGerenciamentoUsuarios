import iUser from "../interface/user/User";

export default class User {
    private readonly id: string;
    private readonly cpf: string;
    private readonly email: string;
    private name: string;
    private dateBirth: Date;
    private password: string;
    private profile: string;

    constructor(user: iUser) {
        this.id = user.id;
        this.cpf = user.cpf;
        this.email = user.email;
        this.name = user.name;
        this.dateBirth = user.dateBirth;
        this.password = user.password;
        this.profile = user.profile;
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

    public get getDateBirth(): Date {
        return this.dateBirth;
    };

    public get getPassword(): string {
        return this.password;
    };

    public get getProfile(): string {
        return this.profile;
    };

    //setters
    public set setName(name: string) {
        this.name = name;
    };

    public set setDateBirth(dateBirth: Date) {
        this.dateBirth = dateBirth;
    };

    public set setPassword(password: string) {
        this.password = password;
    };

    public set setProfile(profile: string) {
        this.profile = profile;
    };
};