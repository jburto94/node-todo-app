const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos')
  //   .findOneAndUpdate({
  //     _id: new ObjectID('5b44b3e9a09580845e7bbdda')
  //   }, {
  //     $set: {
  //       completed: true
  //     }
  //   }, {
  //     returnOriginal: false
  //   }).then(result => {
  //     console.log(result);
  //   });
  
  db.collection('User')
    .findOneAndUpdate({
      _id: new ObjectID('5b4409a06ac012141426d279')
    }, {
      $set: {
        name: 'Jake Burton'
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    }).then(result => {
      console.log(result);
    });

  //client.close();
});