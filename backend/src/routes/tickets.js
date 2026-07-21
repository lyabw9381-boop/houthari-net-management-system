const express = require("express");

const router = express.Router();

let tickets = [];


// عرض جميع التذاكر
router.get("/", (req, res) => {
    res.json(tickets);
});


// إنشاء تذكرة جديدة
router.post("/", (req, res) => {

    const ticket = {

        id: tickets.length + 1,

        customer_id: req.body.customer_id,

        title: req.body.title,

        description: req.body.description,

        status: "مفتوحة",

        created_at: new Date()

    };

    tickets.push(ticket);

    res.json({
        message: "تم إنشاء تذكرة الدعم الفني",
        ticket
    });

});


// إغلاق التذكرة
router.put("/:id/close", (req, res) => {

    const ticket = tickets.find(
        t => t.id == req.params.id
    );

    if (!ticket) {

        return res.status(404).json({
            message: "التذكرة غير موجودة"
        });

    }

    ticket.status = "مغلقة";

    res.json({
        message: "تم إغلاق التذكرة",
        ticket
    });

});

module.exports = router;
