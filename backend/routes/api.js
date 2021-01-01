const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Register = require('../models/register');
const Ground = require('../models/grounds');
const Equipments = require('../models/equipments');
const Post = require('../models/post');
const bookground = require('../models/bookground');
const BookEquip = require('../models/bookequip');
const Event = require('../models/event');
const Sport=require('../models/sports');

router.post('/getsport', (req, res) => {
    if(req.body.token=='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTM0OTMzNTY2LCJleHAiOjE1MzUwMTk5NjZ9.3xOdoxpK8hb42ykjMIl6rwLafB63Y-EQNOO9fFamp68'){
        Sport.find(function (err, data) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(data);
                // console.log(data)
            }
        });
    }else{
        res.json('error');

    }
    
});

router.post('/addsport', (req, res) => {
    var n = req.body.name.toLowerCase();

    Sport.findOne({ name: n}, (err, usr) => {
        if (err) {
            console.log(err)

        return res.json(err);
            
        } else if(usr){
            return res.json({
                msg:'Name Already Exists'
            });
            
        } else if(!usr){
            const diag = new Sport({
                name:n,
                equipments:req.body.equipments        
             
            });
                        
                diag.save((err, added) => {
                    if (err) {
                        console.log(err)
                        return   res.json({
                            success: false,
                            err: err
                        })
                    }
                    else {
                        return   res.json({
                            success: true,
                        })
                    }
                })
        }})
   


})

router.post('/getevent', (req, res) => {
    if(req.body.token=='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTM0OTMzNTY2LCJleHAiOjE1MzUwMTk5NjZ9.3xOdoxpK8hb42ykjMIl6rwLafB63Y-EQNOO9fFamp68'){
        Event.find(function (err, data) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(data);
                // console.log(data)
            }
        });
    }else{
        res.json('error');

    }
    
});
router.post('/getpost', (req, res) => {
    if(req.body.token=='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTM0OTMzNTY2LCJleHAiOjE1MzUwMTk5NjZ9.3xOdoxpK8hb42ykjMIl6rwLafB63Y-EQNOO9fFamp68'){
        Post.find(function (err, data) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(data);
                // console.log(data)
            }
        });
    }else{
        res.json('error');

    }
    
});
router.post('/addpost', (req, res) => {

    const diag = new Post({
        imagesname:req.body.imagesname,
        title:req.body.title,
        description:req.body.description         
     
    });

    diag.save((err, added) => {
        if (err) {
            console.log(err)
            return   res.json({
                success: false,
                err: err
            })
        }
        else {
            return   res.json({
                success: true,
            })
        }
    })

})
router.post('/addevent', (req, res) => {

    const diag = new Event({
        title:req.body.title,
        description:req.body.description         
     
    });

    diag.save((err, added) => {
        if (err) {
            console.log(err)
            return   res.json({
                success: false,
                err: err
            })
        }
        else {
            return   res.json({
                success: true,
            })
        }
    })

})


router.post('/addground', (req, res) => {

                const diag = new Ground({
                    name:req.body.name,          
                 
                });
    
                diag.save((err, added) => {
                    if (err) {
                        console.log(err)
                        return   res.json({
                            success: false,
                            err: err
                        })
                    }
                    else {
                        return   res.json({
                            success: true,
                        })
                    }
                })
    
    })

    router.post('/getground', (req, res) => {
        if(req.body.token=='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTM0OTMzNTY2LCJleHAiOjE1MzUwMTk5NjZ9.3xOdoxpK8hb42ykjMIl6rwLafB63Y-EQNOO9fFamp68'){
            Ground.find(function (err, data) {
                if (err) {
                    res.json(err);
                }
                else {
                    res.json(data);
                    // console.log(data)
                }
            });
        }else{
            res.json('error');
    
        }
        
    });

    router.post('/getequip', (req, res) => {
        if(req.body.token=='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTM0OTMzNTY2LCJleHAiOjE1MzUwMTk5NjZ9.3xOdoxpK8hb42ykjMIl6rwLafB63Y-EQNOO9fFamp68'){
            Equipments.find(function (err, data) {
                if (err) {
                    res.json(err);
                }
                else {
                    res.json(data);
                    // console.log(data)
                }
            });
        }else{
            res.json('error');
    
        }
        
    });
    router.post('/addequip', (req, res) => {

        const diag = new Equipments({
            name:req.body.name,          
            quantity:req.body.quantity, 
        });

        diag.save((err, added) => {
            if (err) {
                console.log(err)
                return   res.json({
                    success: false,
                    err: err
                })
            }
            else {
                return   res.json({
                    success: true,
                })
            }
        })

})

router.post('/bookground', (req, res) => {

    const diag = new bookground({
        name:req.body.name,          
        timeslots:req.body.timeslots, 
        groundname:req.body.groundname,
        iid:req.body.iid
    });

    diag.save((err, added) => {
        if (err) {
            console.log(err)
            return   res.json({
                success: false,
                err: err
            })
        }
        else {
            return   res.json({
                success: true,
            })
        }
    })

})

router.post('/FIRST', (req, res) => {
    const user = new User({
        email: 'admin@admin.com',
        password: 'admin1234',
        username: 'Admin',
        usertype: 'Admin',
        status:'Active',

    });

                    user.save((err, added) => {
                        if (err) {
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


})

router.post('/getreg', (req, res) => {
    if(req.body.token=='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTM0OTMzNTY2LCJleHAiOjE1MzUwMTk5NjZ9.3xOdoxpK8hb42ykjMIl6rwLafB63Y-EQNOO9fFamp68'){
        Register.find(function (err, data) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(data);
                // console.log(data)
            }
        });
    }else{
        res.json('error');

    }
    
});
router.post('/getbookground', (req, res) => {
    if(req.body.token=='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTM0OTMzNTY2LCJleHAiOjE1MzUwMTk5NjZ9.3xOdoxpK8hb42ykjMIl6rwLafB63Y-EQNOO9fFamp68'){
        bookground.find(function (err, data) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(data);
                // console.log(data)
            }
        });
    }else{
        res.json('error');

    }
    
});

router.put('/deleteevent/:id',(req,res,next)=>{

    Event.deleteOne({ _id: req.params.id }, function (err, result) {
         if (err) {
             res.json({success:false});
         } else {
            res.json({success:true});
          
         }
     })
 })
 router.put('/delSport/:id',(req,res,next)=>{

    Sport.deleteOne({ _id: req.params.id }, function (err, result) {
         if (err) {
             res.json({success:false});
         } else {
            res.json({success:true});
          
         }
     })
 })

router.put('/deletereg/:id',(req,res,next)=>{

    Register.deleteOne({ _id: req.params.id }, function (err, result) {
         if (err) {
             res.json({success:false});
         } else {
            res.json({success:true});
          
         }
     })
 })
 router.put('/deletepost/:id',(req,res,next)=>{

    Post.deleteOne({ _id: req.params.id }, function (err, result) {
         if (err) {
             res.json({success:false});
         } else {
            res.json({success:true});
          
         }
     })
 })
 
router.put('/deleteBookGround/:id',(req,res,next)=>{

    bookground.deleteOne({ _id: req.params.id }, function (err, result) {
         if (err) {
             res.json({success:false});
         } else {
            res.json({success:true});
          
         }
     })
 })

 router.post('/getbookequip', (req, res) => {
    if(req.body.token=='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTM0OTMzNTY2LCJleHAiOjE1MzUwMTk5NjZ9.3xOdoxpK8hb42ykjMIl6rwLafB63Y-EQNOO9fFamp68'){
        BookEquip.find(function (err, data) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(data);
                // console.log(data)
            }
        });
    }else{
        res.json('error');

    }
    
});

router.put('/bookequip', (req, res) => {
    uid=req.body.id;
    // console.log("asaddssa     "+req.body.password);
    Equipments.findByIdAndUpdate(uid,{
        $set:{
               quantity:req.body.newquantity
              }
            },{
                new:true
            },
            function (err, result) {
                if (err) {
                    
                    res.json(err);
                }
                else {
                    const diag = new BookEquip({
                        name:req.body.name,          
                        timeslots:req.body.timeslots, 
                        equipName:req.body.equipName,
                        quantity:req.body.quantity,
                        iid:req.body.id
                    });
                
                    diag.save((err, added) => {
                        if (err) {
                            console.log(err)
                            return   res.json({
                                success: false,
                                err: err
                            })
                        }
                        else {
                            return   res.json({
                                success: true,
                            })
                        }
                    })
                }
    
            }
    )
 

})

 
router.put('/deletebookequip/:id',(req,res,next)=>{
    uid=req.body.iid;
    console.log( req.body.iid )
    Equipments.find({ _id: req.body.iid }, function (err, result) {
        if (err) {
            res.json({success:false});
        } else {
            console.log(result)
            var q1= result[0].quantity+req.body.quantity;
            Equipments.findByIdAndUpdate(uid,{
                $set:{
                       quantity:q1
                      }
                    },{
                        new:true
                    },
                    function (err, result) {
                        if (err) {
                            
                            res.json(err);
                        }
                        else {
                                                    
                                    BookEquip.deleteOne({ _id: req.params.id }, function (err, result) {
                                        if (err) {
                                            res.json({success:false});
                                        } else {
                                        res.json({success:true});
                                        
                                        }
                                    })
                        }
            
                    }
            )
         
        }
    })
   

 })


 router.put('/deleteequip/:id',(req,res,next)=>{
    BookEquip.deleteMany({ iid: req.params.id  }, function (err, result) {
        if (err) {
            res.json({success:false});
        } else {
            Equipments.deleteOne({ _id: req.params.id }, function (err, result) {
                if (err) {
                    res.json({success:false});
                } else {
                   res.json({success:true});
                 
                }
            })    
        }
    })
    
 })


 router.put('/deleteground/:id',(req,res,next)=>{
    bookground.deleteMany({ iid: req.params.id  }, function (err, result) {
        if (err) {
            res.json({success:false});
        } else {
            Ground.deleteOne({ _id: req.params.id }, function (err, result) {
                if (err) {
                    res.json({success:false});
                } else {
                   res.json({success:true});
                 
                }
            })    
        }
    })

 })
 module.exports = router;
