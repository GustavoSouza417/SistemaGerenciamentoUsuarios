export default class User {
    constructor(user) {
        this.id = user.id;
        this.cpf = user.cpf;
        this.email = user.email;
        this.name = user.name;
        this.dateBirth = user.dateBirth;
        this.password = user.password;
        this.profile = user.profile;
    }
    ;
    //getters
    get getId() {
        return this.id;
    }
    ;
    get getCpf() {
        return this.cpf;
    }
    ;
    get getEmail() {
        return this.email;
    }
    ;
    get getName() {
        return this.name;
    }
    ;
    get getDateBirth() {
        return this.dateBirth;
    }
    ;
    get getPassword() {
        return this.password;
    }
    ;
    get getProfile() {
        return this.profile;
    }
    ;
    //setters
    set setName(name) {
        this.name = name;
    }
    ;
    set setDateBirth(dateBirth) {
        this.dateBirth = dateBirth;
    }
    ;
    set setPassword(password) {
        this.password = password;
    }
    ;
    set setProfile(profile) {
        this.profile = profile;
    }
    ;
}
;
