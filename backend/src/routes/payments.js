const express = require("express");

const router = express.Router();


let payments = [];


// عرض الدفعات

router.get("/", (req,res)=>{

    res.json(payments);

});



// تسجيل دفعة جديدة

router.post("/", (req,res)=>{


    const payment = {

        id: payments.length + 1,

        customer_id: req.body.customer_id,

        invoice_id: req.body.invoice_id,

        amount: req.body.amount,

        method: req.body.method,

        payment_date: new Date()

    };


    payments.push(payment);


    res.json({

        message:"تم تسجيل الدفعة",

        payment

    });


});



module.exports = router;
