const express = require('express');
const router = express.Router();
const User = require('../models/user')
const Register = require('../models/register')




router.post('/onRegister', (req, res) => {
    console.log(req.body);
    const user = new Register({
        email: req.body.email,
        password: req.body.password,
        username: req.body.username,
        usertype: req.body.usertype,
    });
    
    console.log(user);

    Register.findOne({ email: req.body.email }, (err, usr) => {
        if (err) {
           return res.json({success:false});
        }
        else if(usr){
            return res.json({msg:"Registeration Pending"});

        }
        else{
            User.findOne({ email: req.body.email }, (err, usr) => {
                if (err) {
                   return res.json({success:false});
                }
                else if(usr){
                    return res.json({msg:"Email Already Registered"});
        
                }
                else{
                    // var regularExpression  = /^[a-zA-Z]$/;
                    var strongRegex = new RegExp("^(?=.*[!@#\$%\^&\*])");
                    if (req.body.password.length < 8) {
                        
                       return res.json({
                            msg:"Your password must be at least 8 characters"
                        })
                    }
                    else if(req.body.password.search(/[a-z]/i) < 0){
                        return res.json({
                            msg:"password should contain atleast one letter"
                        })
                    }
                    
                    else{
        
                            user.save((err, added) => {
                                if (err) {
                                    console.log(err)
                                    res.json({
                                        success: false,
                                        err: err
                                    })
                                }
                                else {
                                    res.json({
                                        success: true
                                    })
                                }
                            })
                    }
                   
                    
        
                } 
            })
        
        
        }
    })
  



}) 

 


router.post('/signup', (req, res) => {
    console.log(req.body);
    const user = new User({
        email: req.body.email,
        password: req.body.password,
        username: req.body.username,
        usertype: req.body.usertype,
        status:req.body.status,
    });
    
    console.log(user);
    User.findOne({ email: req.body.email }, (err, usr) => {
        if (err) {
           return res.json({success:false});
        }
        else if(usr){
            return res.json({msg:"Email Already Registered"});

        }
        else{
            // var regularExpression  = /^[a-zA-Z]$/;
            var strongRegex = new RegExp("^(?=.*[!@#\$%\^&\*])");
            if (req.body.password.length < 8) {
                
               return res.json({
                    msg:"Your password must be at least 8 characters"
                })
            }
            else if(req.body.password.search(/[a-z]/i) < 0){
                return res.json({
                    msg:"password should contain atleast one letter"
                })
            }
            
            else{

                    user.save((err, added) => {
                        if (err) {
                            console.log(err)
                            res.json({
                                success: false,
                                err: err
                            })
                        }
                        else {
                            res.json({
                                success: true
                            })
                        }
                    })
            }
           
            

        } 
    })





}) 


router.post('/signin', (req, res) => {
    console.log(req.body);
        console.log("sahgsa");
    User.findOne({ email: req.body.email }, (err, usr) => {
        if (err) {
            res.json({success:false});
        } else {
            if (usr) {
                if(usr.status=="Active"){

                    if (usr.password == req.body.password) {
                          return  res.json({ success: true, user: usr })
                    }
                    else{
                        return  res.json({ success: false, msg:'Wrong Password' })

                    }
                }
                else{
                    return res.json({ msg:"User is Suspended" })

                }
              
            }if(!usr){
                return res.json({ msg:"Email Not Found" })

            }
        }
    })
})
//   router.post('/updateuser/:id',function(req,res){
//       console.log("update");
//      
//   })


router.put('/getuserdata', (req, res) => {
    if(req.body.token=='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTM0OTMzNTY2LCJleHAiOjE1MzUwMTk5NjZ9.3xOdoxpK8hb42ykjMIl6rwLafB63Y-EQNOO9fFamp68'){
        User.find(function (err, data) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(data);
            }
        });
    }else{
        res.json("ERROR");

    }
   
});

// router.post('/updateuser/:id', (req, res) => {
//     console.log("hello   "+req.body);
//     const user = new User({
//         email: req.body.email,
//         password: req.body.password,
//         username: req.body.username,
//         usertype: req.body.usertype
//     });
//     console.log(req.params.id);
//     User.findByIdAndUpdate(req.params._id,
//                 {
//                   $set:{
//                     email: req.body.email,
//                     password: req.body.password,
//                     username: req.body.username,
//                     usertype: req.body.usertype
//                   }
//               },
//               {
//                   new:true
        
//               },
//               function(err,updateduser){
//                 if (err) {
//                     console.log(err);
//                     res.json({
//                         success: false,
//                         msg: 'error updating user'
//                     });
//                 } else {
//                     res.json(updateduser);
//                 }
//               })
// })

router.put('/updateuser/:id',(req,res,next)=>{
    let errors=[];
    uid=req.params.id;
    console.log("asaddssa     "+req.body.password);
    User.findByIdAndUpdate(uid,{
        $set:{
                email: req.body.email,
                password: req.body.password,
                username: req.body.username,
                bn:req.body.bn,
                usertype: req.body.usertype,
                status:req.body.status,
                emptype:req.body.emptype
              }
            },{
                new:true
            },
            function (err, result) {
                if (err) {
                    
                    res.json(err);
                }
                else {
                    res.json(result);
                }
    
            }
    )
})


    router.put('/userdelete/:id',(req,res,next)=>{

    User.deleteOne({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.json({success:false});
        } else {
              
            res.json({success:true});
           
        
        }
        
    
    })


    // User.deleteOne({_id: req.params.id}).then(result=>{
    //     console.log(result);
    // })
    // res.status(200).json({message:"deleted!"});
})

module.exports = router;