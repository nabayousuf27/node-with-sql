require('dotenv').config();
const mysql = require('mysql2');
const { faker } = require('@faker-js/faker');


// Create the connection to database
const connection =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: process.env.DB_PASSWORD,
});
//inserting new data
let q = "INSERT INTO user (id,username,email,password) VALUES ?";
let users = [
  ["123b","123_newuserb","abc@gmail.comb","abcb"],
  ["123c","123_newuserc","abc@gmail.comc","abcc"]
]
try{
connection.query(q, [users], (err,result) => {
  if(err) throw err;
  console.log(result);
  console.log(result.length)
  console.log(result[0]);
  ;

  });
}catch(err){
  console.log(err);
}
connection.end();


let  getRandomUser =  () =>  {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

// console.log(getRandomUser());