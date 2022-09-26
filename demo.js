const { MongoClient } = require('mongodb')

async function main() {

    const uri = "mongodb+srv://demo:node345@cluster0.v5pmuae.mongodb.net/?retryWrites=true&w=majority"

    const client = new MongoClient(uri)
try {
    await client.connect();
    await findOneListByBookname(client,"secret")
    await createMultipleListing(client, [
        {
            Bookname : "wings of fire",
            AutherName: "APJ",
            Publishing : "university Press",
            year:1999
        },
        {
            
            Bookname : "secret",
            AutherName: "Rhonda Byrne",
            Publishing : "Beyond words",
            year:2006
        },
        {
            Bookname : "The life",
            AutherName: "Malcolm Knox",
            Publishing : "self Publishing",
            year:2012
        },
        {
            Bookname : "The law ofsuccess",
            AutherName: "Napoleon Hill",
            Publishing : "Tribeca Books",
            year:1928
        },
        {
            Bookname : "You Can",
            AutherName: " Frank Abagnale jr",
            Publishing : "Grosset & Dunlap",
            year:1980
        },
        
        
    ])
    
} catch (e) {
    console.error(e);
    
}finally{
    await client.close();

}

}

main().catch(console.error);
async function findOneListByBookname(client,nameofListing) {
    const res = await client.db("sample_airbnb").collection("listingAndReviews").findOne({Bookname:nameofListing})

    if(res){
        console.log(`found a listing in the collection with the name'${nameofListing}'`);
        console.log(res);
    }
    else{
        console.log(`no Listing found with the name '${nameofListing}'`);
    }
    
}
async function createMultipleListing(client,newListings) {
   const results = await client.db("sample_airbnb").collection("listingAndReviews").insertMany(newListings)
   console.log(`${results.insertedCount} new listings created with the following id(d)`);
}



async function listDataBases(client){
    const dataBaseList = await client.db().admin().listDatabases();

    console.log("DataBases:");
    dataBaseList.databases.forEach(db => {
        consolse.log(`-${db.name}`);
        
    });
}

//node123
    
    