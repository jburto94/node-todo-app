const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo');
  //   }

  //   console.log(JSON.stringify(result.ops, null, 2));
  // });

  // db.collection('User').insertOne({
  //   name: 'Jake Burton', 
  //   age: 24,
  //   location: 'Piedmont, SC'
  // }, (err, result) => {
  //   if (err) {
  //     console.log('Unable to insert user', err);
  //   }

  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  client.close();
});