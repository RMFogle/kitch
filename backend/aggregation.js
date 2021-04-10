const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose'); 

require('dotenv').config();

async function main() {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/drivers/node/ for more details
     */
    const uri = process.env.ATLAS_URI; 
    mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);  
    /**
     * The Mongo Client you will use to interact with your database
     * See https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html for more details
     */
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await listDatabases(client);
        await listLastUpdatedClients(client, 1)

    } catch (e) {
        console.error(e); 
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);

// Add functions that make DB calls here
async function listDatabases(client){
    let databasesList = await client.db().admin().listDatabases(); 

    console.log("Databases:"); 
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function listLastUpdatedClients(client, maxNumberToPrint) {

const pipeline = [
    {
      '$group': {
        '_id': '$_id', 
        'lastUpdated': {
          '$last': '$updatedAt'
        }
      }
    }, {
      '$sort': {
        'lastUpdated': -1
      }
    }, {
      '$limit': maxNumberToPrint
    }
  ];
  
const aggCursor = client.db("<dbname>")
                        .collection("clients")
                        .aggregate(pipeline)

await aggCursor.forEach(lastClientUpdated => {
    console.log(`${lastClientUpdated._id}: ${lastClientUpdated.lastUpdated}`)
}); 

}