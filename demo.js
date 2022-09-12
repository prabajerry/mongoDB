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

async function listDataBases(client){
    const dataBaseList = await client.db().admin().listDataBases();

    console.log("DataBases:");
    dataBaseList.databases.forEach(db => {
        console.log(`-${db.name}`);
        
    });
}

//node123
    
    