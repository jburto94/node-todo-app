const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos')
  //   .find().count()
  //   .then((count) => {
  //     console.log(`Todos count: ${count}`);
  //   }, err => {
  //     console.log('Unable to fetch todos', err);
  //   });

  db.collection('User')
    .find({name: 'Jake Burton'}).toArray()
    .then(document => {
      console.log('Users');
      console.log(JSON.stringify(document, null, 2))
    }, err => {
      console.log('Unable to fetch users', err);
    });

  //client.close();
});