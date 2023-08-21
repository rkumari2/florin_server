require("dotenv").config();
const fs = require("fs");
const db = require("./connect");

const sql = fs.readFileSync(__dirname + "/data.sql").toString();
console.log(sql)

db.query(sql)
// console.log('line 9 setup')
    .then(data => {
        console.log('line 11 setup')
        db.end();
        console.log("Setup complete.");
    })
    .catch(error => console.log(error));
