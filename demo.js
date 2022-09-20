const { MongoClient } = require('mongodb')

async function main() {

    const uri = "mongodb+srv://demo:node123@cluster0.v5pmuae.mongodb.net/?retryWrites=true&w=majority"

    const client = new MongoClient(uri)
try {
    await client.connect();
    createListing(client,{
        Bookname : "wings of fire",
        AutherName: "APJ",
        Publishing : "university Press",
        year:"1999",
        bedrooms:1,
        bathrooms:1
        

        
    })
    
} catch (e) {
    console.error(e);
    
}finally{
    await client.close();

}

}

main().catch(console.error);

async function createListing (client,newListing) {
   const result = await client.db("sample_airbnb").collection("listingAndReviews").insertOne(newListing)
    console.log(`New listing created with the following id : ${result.insertedId} `);
        
    
}

async function listDataBases(client){
    const dataBaseList = await client.db().admin().listDatabases();

    console.log("DataBases:");
    dataBaseList.databases.forEach(db => {
        consolse.log(`-${db.name}`);
        
    });
}

//node123
    
    