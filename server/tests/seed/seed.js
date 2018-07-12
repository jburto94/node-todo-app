const {ObjectID} = require('mongodb');
const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');
const jwt = require('jsonwebtoken');

const todos = [{
  _id: new ObjectID(),
  text: 'first test'
}, {
  _id: new ObjectID(),
  text: 'second test',
  completed: true,
  completedAt: 123456
}];

const populateTodos = done => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
};

const userOneID = new ObjectID();
const userTwoID = new ObjectID();
const users = [{
  _id: userOneID,
  email: 'jake@example.com',
  password: 'password1',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userOneID, access: 'auth'}, 'abc123').toString()
  }]
}, {
  _id: userTwoID,
  email: 'other@example.com',
  password: 'password2'
}];

const populateUsers = done => {
  User.remove({}).then(() => {
    const userOne = new User(users[0]).save()
      .then()

    const userTwo = new User(users[1]).save()
      .then()

    return Promise.all([userOne, userTwo]);
  }).then(() => done());
}

module.exports = {todos, populateTodos, users, populateUsers};