//import module
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('listuser');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      callback(docs);
    });
}; // func find all 

// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'usermanagerment';

//method get
exports.user = (req, res) => {

    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
       
        const db = client.db(dbName);
        findDocuments(db, (docx) => {
            res.render('users/user.pug', {
                users : docx
            });
        })
        client.close();
      });
    
};



