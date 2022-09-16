const { MongoClient } = require('mongodb')

async function main() {

    const uri = "mongodb+srv://demo:node123@cluster0.v5pmuae.mongodb.net/?retryWrites=true&w=majority"

    const client = new MongoClient(uri)
try {
    await client.connect();
    await listDataBases(client);
    
} catch (e) {
    console.error(e);
    
}finally{
    await client.close();

}

}

main().catch(console.error);
async function createListing (client,newListing) {
   const result = await client.db("sample_airebnb").collection("listAndReviews").insertone(newListing)
    console.log('New listing created with the following id : ${result.insertedI} ');
        
    
}

async function listDataBases(client){
    const dataBaseList = await client.db().admin().listDatabases();

    console.log("DataBases:");
    dataBaseList.databases.forEach(db => {
        consolse.log(`-${db.name}`);
        
    });
}

//node123
    
    