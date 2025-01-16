export enum Errors {
    //model
    ERROR_READING_DATABASE = "An error occurred while reading the database",
    ERROR_SAVING_DATA = "An error occured while saving the data to the database",

    //user data validator
    ERROR_INVALID_ID = "The ID received is invalid",
    ERROR_INVALID_CPF = "The CPF received is invalid",
    ERROR_INVALID_EMAIL = "The email received is invalid",
    ERROR_INVALID_NAME = "The name received is invalid",
    ERROR_INVALID_DATE_BIRTH = "The date birth received is invalid",
    ERROR_INVALID_PASSWORD = "The password received is invalid",
    ERROR_INVALID_PROFILE = "The profile received is invalid",

    //user exists validator
    ERROR_THERE_ARE_NO_USERS = "There are no users in the database",
    ERROR_REGISTERED_ID = "The received ID is already registered",
    ERROR_REGISTERED_CPF = "The received CPF is already registered",
    ERROR_REGISTERED_EMAIL = "The received email is already registered",
    ERROR_NO_REGISTERED_ID = "The received ID is not registered",
    ERROR_NO_REGISTERED_CPF = "The received CPF is not registered",
    ERROR_NO_REGISTERED_EMAIL = "The received email is not registered"
};
