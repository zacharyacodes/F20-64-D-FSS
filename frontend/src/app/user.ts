export class User{
   
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
    bn: {
        type: String,
        required: true
    };
    
    usertype: {
        type: String,
        required: true
    };
    status:string;
   
};