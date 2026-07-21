const express = require("express");
const cors = require("cors");

const customerRoutes = require("./routes/customers");

const app = express();

app.use(cors());
app.use(express.json());


// الصفحة الرئيسية
app.get("/", (req,res)=>{
    res.json({
        system:"Houthari Net Management System",
        version:"1.0",
        status:"running"
    });
});


// مسار المشتركين
app.use("/api/customers", customerRoutes);


const PORT = 5000;

app.listen(PORT,()=>{
    console.log(
        `Server running on port ${PORT}`
    );
});
