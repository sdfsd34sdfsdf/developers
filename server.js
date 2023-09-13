const express = require('express');
const app = express();
const port = 5000; // MoÅ¾ete promijeniti na Å¾eljeni port

// Postavite direktorij za statiÄke datoteke (npr. CSS, JavaScript, slike)


// Definirajte rutu za prikazivanje HTML stranice


// Nova ruta za "/save"
app.get('/save', (req, res) => {
    const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://qq:Minimum90@cluster0.xdwo6qw.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("adminn").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    // Dohvatite kolekciju iz baze (zamijenite 'collectionName' s imenom stvarne kolekcije)
    const collection = client.db("adminn").collection("users");

    // Dohvatite sve dokumente iz kolekcije i ispišite ih
    const documents = await collection.find({}).toArray();
    console.log("Dokumenti iz kolekcije:");
    console.log(documents);
    const developers = documents;

    res.json(developers);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);

});

// Pokrenite server na odabranom portu
app.listen(port, () => {
  console.log(`Server je pokrenut na http://localhost:${port}`);
});
