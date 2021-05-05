const { MongoClient } = require('mongodb');
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

        // Aggregation pipeline
        const pipeline = [
            {
                '$match': {
                    'operationType': 'update', 
                    'fullDocument.clientname': 'Judy'
                },
            }
        ];

        // Make the appropriate DB calls
        await monitorListingsUsingEventEmitter(client, 30000, pipeline);

    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);

// Add functions that make DB calls here

function closeChangeStream(timeInMs = 60000, changeStream) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Closing the change stream");
            changeStream.close();
            resolve();
        }, timeInMs)
    })
};

async function monitorListingsUsingEventEmitter(client, timeInMs = 60000, pipeline = []){
    const collection = client.db("<dbname>").collection("clients");
    const changeStream = collection.watch(pipeline);
    
    changeStream.on('change', (next) => {
        console.log(next);
    });

    await closeChangeStream(timeInMs, changeStream);
}