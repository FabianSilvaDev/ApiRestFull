const express = require('express');
const {faker} = require('@faker-js/faker')


const usersRouter = express.Router();

usersRouter.get("/", (req, res) => {
  const users = [];
  let { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    users.push({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        number : faker.phone.imei(),
    });
  }
  res.json(users);
}
);



// usersRouter.get("/", function(req,res){
//   const { limit, offset } = req.query;
//   if(limit && offset){
//     res.json(
//       limit,
//       offset
//     )
//   }else{
//     res.send('no hay parametros')
//   }
// })

module.exports = usersRouter;
