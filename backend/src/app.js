const express = require("express");
const cors = require("cors");

const customerRoutes = require("./routes/customers");
const packageRoutes = require("./routes/packages");
const userRoutes = require("./routes/users");
const invoiceRoutes = require("./routes/invoices");


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




// APIs


// المشتركين

app.use(
"/api/customers",
customerRoutes
);


// الباقات

app.use(
"/api/packages",
packageRoutes
);


// المستخدمين

app.use(
"/api/users",
userRoutes
);


// الفواتير

app.use(
"/api/invoices",
invoiceRoutes
);



const PORT = 5000;


app.listen(PORT,()=>{

console.log(
"Houthari System running on port 5000"
);

});
