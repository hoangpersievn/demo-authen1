const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'usermanagerment';

 // func interact with database
// const findDocuments = function(db, callback) {
//     // Get the documents collection
//     const collection = db.collection('listuser');
//     // Find some documents
//     collection.find({}).toArray(function(err, docs) {
//       assert.equal(err, null);
//       callback(docs);
//     });
// }; // func find all 


//method get
exports.login_get = (req, res) => {
    res.render('authen.pug', {
        errors : []
    })
};

//method post
exports.login_post = (req, res) => {
    const username = req.body.user;
    const passwordUser = req.body.password;
    const errors = [];

    const findDocuments = function(db, callback) {
        // Get the documents collection
        const collection = db.collection('listuser');
        // Find some documents
        console.log(collection.find({name : username}));
        collection.find({'name': username}).toArray(function(err, docs) {
          assert.equal(err, null);
          callback(docs);
        });
    }
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
       
        const db = client.db(dbName);
        findDocuments(db, (user) => {
            console.log("ten : " + user[0].name)
            if(!user[0].name){
                errors.push("user not exist.")
                res.render('authen.pug', {
                    errors : errors
                });
                return;
            };
            if(!passwordUser){
                errors.push("Do you enter password ? ")
                res.render('authen.pug', {
                    errors : errors
                });
                return;
            }
            res.cookie('idUser', user[0]._id);

            res.redirect('/user')
        })
        client.close();
      });
}