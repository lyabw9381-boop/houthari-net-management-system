const express = require("express");

const router = express.Router();

let users = [
    {
        id:1,
        name:"مدير النظام",
        username:"admin",
        password:"123456",
        role:"admin"
    }
];


// عرض المستخدمين
router.get("/", (req,res)=>{
    res.json(users);
});


// تسجيل الدخول
router.post("/login",(req,res)=>{

    const user = users.find(
        u =>
        u.username === req.body.username &&
        u.password === req.body.password
    );


    if(!user){

        return res.status(401).json({
            message:"بيانات الدخول غير صحيحة"
        });

    }


    res.json({

        message:"تم تسجيل الدخول",

        user:{
            name:user.name,
            role:user.role
        }

    });

});


module.exports = router;
