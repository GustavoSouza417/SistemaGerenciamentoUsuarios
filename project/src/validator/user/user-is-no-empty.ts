export default class UserIsNoEmpty {
    public static stringIsNoEmpty(arg: string | null | undefined): boolean {
        return typeof arg === "string" && 
               arg.trim() !== "";
    };
};