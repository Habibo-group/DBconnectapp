const { MongoClient } = require("mongodb");
var client = null;

function connecter(url,callback){
    if(client == null){
        client = new MongoClient(url);

        client.connect((error)=>{
            if(error){
                client = null;
                callback(error);
            }
            else{
                callback();
            }
        });
    }
    else{
        callback();
    }
}

function db(){
    return new db(client,"dbOk");
}

function fermerfunction(){
    if(client){
        client.close();
        client = null ;
    }
}

module.exports = {connecter,db,fermerfunction}