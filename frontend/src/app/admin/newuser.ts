export class NewUser{
   
    username: {
        type: String,
        required: true,
    };
    email: {
        type: String,
        required: true
    };
    password: {
        type: String,
        required: true
    };
   
    usertype: {
        type: String,
        required: true
    };
    status:string;
   
};