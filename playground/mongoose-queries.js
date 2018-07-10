const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

const id = '5b44c1b4ef79ac179ca4d2e6';

User.find({
  _id: id
}).then(users => {
  console.log('Users', users);
});

User.findOne({
  _id: id
}).then(user => {
  console.log('User', user);
});

User.findById(id)
  .then(user => {
    if(!user) {
      return console.log('ID not found');
    }
    console.log('User by ID', user);
  }).catch(e => console.log(e));

// const id = '5b44d9d5760c3422a814b0911';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not found');
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log('Todo', todo);
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log('Id not found');
//     }
//     console.log('Todo By ID', todo);
//   }).catch(e => console.log(e));