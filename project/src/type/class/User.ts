import iUser from "../interface/user/User";

export default abstract class User {
    protected readonly id: string;
    protected readonly cpf: string;
    protected readonly email: string;
    protected name: string;
    protected dateBirth: string;
    protected password: string;
    protected profile: string;

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
    public set setName(name: string) {
        this.name = name;
    };

    public set setDateBirth(dateBirth: string) {
        this.dateBirth = dateBirth;
    };

    public set setPassword(password: string) {
        this.password = password;
    };

    public set setProfile(profile: string) {
        this.profile = profile;
    };
};