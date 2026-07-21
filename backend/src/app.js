const express = require("express");
const cors = require("cors");

const customerRoutes = require("./routes/customers");
const packageRoutes = require("./routes/packages");
const userRoutes = require("./routes/users");
const invoiceRoutes = require("./routes/invoices");
const paymentRoutes = require("./routes/payments");


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




// مسارات النظام


app.use(
"/api/customers",
customerRoutes
);


app.use(
"/api/packages",
packageRoutes
);


app.use(
"/api/users",
userRoutes
);


app.use(
"/api/invoices",
invoiceRoutes
);


app.use(
"/api/payments",
paymentRoutes
);



const PORT = 5000;


app.listen(PORT,()=>{

console.log(
"Houthari System running on port 5000"
);

});
