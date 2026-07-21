const express = require("express");

const router = express.Router();

let packages = [];


// عرض الباقات
router.get("/", (req,res)=>{
    res.json(packages);
});


// إضافة باقة
router.post("/", (req,res)=>{

    const newPackage = {

        id: packages.length + 1,

        name: req.body.name,

        speed: req.body.speed,

        price: req.body.price,

        duration: req.body.duration

    };


    packages.push(newPackage);


    res.json({

        message:"تم إضافة الباقة",

        package:newPackage

    });

});


module.exports = router;
