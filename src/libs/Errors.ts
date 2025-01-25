export enum Httpcode {
    OK = 200,
    CREATED = 201,
    NOT_MODIFIED = 304,
    BAD_REQUIST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVES_ERROR = 500,
}
export enum Message{
    SOMTHING_WENT_WRONG = "Somthing wend wrong!",
    NO_DATA_FOUND = "No data found!",
    CREATE_FAILED = "Create failed!",
    UPDATE_FAILED = "Update failed!",

    USED_NICK_PHONE = "you are inserting alredy used nick or phone!",
    TOKEN_CREATION_FAILED ="Token creation error!",
    NO_MEMBER_NICK = "No member with that member nickn!",
    BLOCKED_USER = "You have been blocked, contact restaraunt!",
    WRONG_PASSWORD = " wrong password intered, please try again!",
    NOT_AUTHENTICATED ="You are not authenticated, Please login first!",
    
}

class Errors extends Error {
    public code: Httpcode;
    public message: Message;

    static standart = {
        code: Httpcode.INTERNAL_SERVES_ERROR,
        message: Message.SOMTHING_WENT_WRONG,
    };

    constructor(statusCode: Httpcode, statusMessage: Message) {
        super();
        this.code = statusCode;
        this.message = statusMessage;
          
    }

}
export default Errors; 