const express = require("express");

const router = express.Router();


let invoices = [];


// عرض الفواتير

router.get("/", (req,res)=>{

    res.json(invoices);

});




// إنشاء فاتورة

router.post("/", (req,res)=>{


    const invoice = {

        id: invoices.length + 1,

        customer_id: req.body.customer_id,

        amount: req.body.amount,

        invoice_date:
        new Date(),

        status:"غير مدفوعة"

    };


    invoices.push(invoice);


    res.json({

        message:"تم إنشاء الفاتورة",

        invoice

    });


});



module.exports = router;
