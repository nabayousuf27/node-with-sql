require('dotenv').config();
const mysql = require('mysql2');
const { faker } = require('@faker-js/faker');
const express =  require("express");
const app = express();
const path = require("path");

app.set("view engine" , "ejs");
app.set("views", path.join(__dirname, "/views"));


// Create the connection to database
const connection =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: process.env.DB_PASSWORD,
});


// let users = [
//   ["123b","123_newuserb","abc@gmail.comb","abcb"],
//   ["123c","123_newuserc","abc@gmail.comc","abcc"]
// ]

//we need 100 users data , generating from faker
let  getRandomUser =  () =>  {
  return[ 
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}
// //inserting new data
// let q = "INSERT INTO user (id,username,email,password) VALUES ?";

// let data = [];
// for( let i = 0; i<=100 ; i++ ){
//   data.push(getRandomUser()); //101 fake users data
// }




// let  getRandomUser =  () =>  {
//   return {
//     id: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//   };
// }


// console.log(getRandomUser());

//fetch and show total numbers of users on our app
app.get("/" , (req, res) => {
  let q = 'select count(*) from user'; 
  try{
connection.query(q, (err,result) => {
  if(err) throw err;
  let results = result[0]["count(*)"];
  res.render("home.ejs",{results});
  });
}catch(err){
  console.log(err);
  res.send("some error in database");
}
});

app.listen ("8080" , () => {
  console.log("server is listening to port 8080");
})

// try{
// connection.query(q, [data], (err,result) => {
//   if(err) throw err;
//   console.log(result);
//   console.log(result.length)
//   console.log(result[0]);
//   ;

//   });
// }catch(err){
//   console.log(err);
// }
// connection.end();