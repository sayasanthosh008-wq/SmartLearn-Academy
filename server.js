const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(__dirname));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "2S.h590Na",   
    database: "smartlearn"
});

db.connect((err) => {

    if(err){
        console.log(err);
    }

    else{
        console.log("MySQL Connected");
    }

});

app.post("/feedback", (req, res) => {

    const {name, email, category, message} = req.body;

    const sql =
    "INSERT INTO feedback (name,email,category,message) VALUES (?,?,?,?)";

    db.query(
        sql,
        [name,email,category,message],
        (err,result) => {

            if(err){
                res.send(err);
            }

            else{
                res.send("Feedback Saved");
            }

        }
    );

});

app.listen(3000, () => {

    console.log("Server Running on Port 3000");

});



app.post("/contact", (req, res) => {

    const { name, email, subject, message } = req.body;

    const sql =
    "INSERT INTO contact(name,email,subject,message) VALUES (?,?,?,?)";

    db.query(sql,
    [name,email,subject,message],
    (err,result)=>{

        if(err){
            res.send("Error");
        }

        else{
            res.send("Contact Saved");
        }

    });

});

app.post("/demo", (req, res) => {
    console.log("DEMO ROUTE HIT");
    console.log(req.body);
    const {
        studentName,
        parentName,
        email,
        phone,
        grade,
        subject,
        demoDate
    } = req.body;

    const sql =
    `INSERT INTO demo
    (studentName,parentName,email,phone,grade,subject,demoDate)
    VALUES (?,?,?,?,?,?,?)`;

    db.query(
        sql,
        [
            studentName,
            parentName,
            email,
            phone,
            grade,
            subject,
            demoDate
        ],
        (err, result) => {

            if(err){
                console.log(err);
                res.send("Error");
            }
            else{
                res.send("Demo Booking Saved");
            }

        }
    );

});