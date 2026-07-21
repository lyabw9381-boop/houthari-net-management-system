const express = require("express");

const router = express.Router();

const roles = require("../config/roles");


let users = [

    {
        id:1,
        name:"مدير النظام",
        username:"admin",
        password:"123456",
        role:"admin"
    },

    {
        id:2,
        name:"موظف خدمة العملاء",
        username:"employee",
        password:"123456",
        role:"employee"
    },

    {
        id:3,
        name:"محصل",
        username:"collector",
        password:"123456",
        role:"collector"
    },

    {
        id:4,
        name:"الدعم الفني",
        username:"support",
        password:"123456",
        role:"support"
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

            role:user.role,

            permissions:
            roles[user.role].permissions

        }

    });


});



module.exports = router;
