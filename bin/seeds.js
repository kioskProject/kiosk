// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Kiosk = require("../models/Kiosk");

const bcryptSalt = 10;

mongoose
  .connect('mongodb://localhost/kiosk-project', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let users = [
  {
    username: "alice",
    password: bcrypt.hashSync("alice", bcrypt.genSaltSync(bcryptSalt)),
    email:"alice@hotmail.com"
  },
  {
    username: "bob",
    password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt)),
    email:"a@hotmail.com"
  }
]




const Promise1 = 
User.deleteMany()
  .then(() => {
    return User.create(users)
  })
  .then(usersCreated => {
    console.log(`${usersCreated.length} users created with the following id:`);
    console.log(usersCreated.map(u => u._id));
  })

const Promise2 =
  Kiosk.deleteMany()
  .then(() => {
    return Kiosk.create(kiosks)
    
  })
  .then(kiosksCreated => {
    console.log(`${kiosksCreated.length} kiosks created with the following id:`);
    console.log(kiosksCreated.map(u => u._id)); // CAMBIAR u.id PARA kiosk
  })

Promise.all([Promise1, Promise2])
.then(() => {
  // Close properly the connection to Mongoose
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})