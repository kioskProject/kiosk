// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Kiosk = require("../models/Kiosk");
const Comment = require("../models/Comment");

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

let kiosks = [
{
  kioskName: "Kiosk America",
  location: "AV. AMÉRICA", //CAMBIAR LOCATION PONER STRINGS
  wifi: true,
  drinks: true,
  internationalPress: true,
  cards: true,
  souvenirs: true,
  kidsCards: true,
  cigarettes: true,
  rate: 3,
  picPath: 'https://res.cloudinary.com/dum6ps32a/image/upload/v1543241847/kiosk/periodico_opt.jpg',
  picName: "black"
},

{
  kioskName: "Your Kiosk",
  location: "Paseo Castellana",
  wifi: true,
  drinks: true,
  internationalPress: true,
  cards: true,
  souvenirs: true,
  kidsCards: true,
  cigarettes: true,
  rate: 4,
  picPath: 'https://res.cloudinary.com/dum6ps32a/image/upload/v1543246298/kiosk/images.jpg',
  picName: "foo"
}
]

let comments = 

  {
    picPath: "https://res.cloudinary.com/dum6ps32a/image/upload/v1543246298/kiosk/images.jpg",
    picName: "foo",
    kioskName: "Your Kiosk",
    rate: 5,
    comments: "HOLA ESTE ES MI COOMMENT",  
    // text: String
  }




const Promise1 = 
User.deleteMany()
  .then(() => {
    return User.create(users)
  })
  .then(usersCreated => {
    comments.author = usersCreated[0]._id;
    console.log(`${usersCreated.length} users created with the following id:`);
    console.log(usersCreated.map(u => u._id));
    return Comment.create(comments)
  })

   



const Promise2 =
  Kiosk.deleteMany()
  .then(() => {
    return Kiosk.create(kiosks)
    
  })
  .then(kiosksCreated => {
    console.log(`${kiosksCreated.length} kiosks created with the following id:`);
    console.log(kiosksCreated.map(u => u._id)); // CAMBIAR u.id PARA kiosk ????
  })

  

//   ////////  CREA COMENTARIOS y aqui en seeds
//   const Promise3 =
//   Comment.deleteMany()
//   .then(() => {
//     return Comment.create(comments)
//   })
//   .then(commentsCreated => {
//     console.log(`${commentsCreated.length} comments created with the following id:`);
//     console.log(commentsCreated.map(u => u._id));
//   })
  

// ///////// .drop()


Promise.all([Promise1, Promise2])
.then(() => {
  // Close properly the connection to Mongoose
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})