const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'usermanagerment';

exports.authen = (req, res, next) => {

    const findDocuments = function(db, callback) {
        // Get the documents collection
        const collection = db.collection('listuser');
        // Find some documents
        collection.find({'_id': req.cookies.idUser}).toArray(function(err, docs) {
          assert.equal(err, null);
          callback(docs);
        });
    }
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
       
        const db = client.db(dbName);
        findDocuments(db, (user) => {
            console.log(user)
        })
        client.close();
      });
    if(!req.cookies.idUser){
        res.redirect('/authen/login');
        return
    };
    next();
}