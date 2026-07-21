const express = require("express");

const router = express.Router();

let customers = [];

// عرض جميع المشتركين
router.get("/", (req, res) => {
    res.json(customers);
});


// إضافة مشترك جديد
router.post("/", (req, res) => {

    const customer = {
        id: customers.length + 1,
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        status: "نشط"
    };

    customers.push(customer);

    res.json({
        message:"تم إضافة المشترك",
        customer
    });

});


module.exports = router;
