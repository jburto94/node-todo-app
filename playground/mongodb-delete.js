const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos')
  //   .deleteMany({text: 'Eat Lunch'})
  //   .then(result => {
  //     console.log(result);
  //   });

  // db.collection('Todos')
  //   .deleteOne({text: 'Eat Lunch'})
  //   .then(result => {
  //     console.log(result);
  //   });

  // db.collection('Todos')
  //   .findOneAndDelete({completed: false})
  //   .then(result => {
  //     console.log(result);
  //   });

  // db.collection('User')
  //   .deleteMany({name: 'Jake Burton'})
  //   .then(result => {
  //     console.log(result);
  //   });

  db.collection('User')
    .findOneAndDelete({_id: ObjectID('5b43d6a404a0f325585ed524')})
    .then(result => {
      console.log(result);
    });
  
  //client.close();
});