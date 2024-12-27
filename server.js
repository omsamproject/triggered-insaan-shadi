import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { MongoClient, ObjectId } from 'mongodb';

const app = express();
const port = 10000; // Change to a different port

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.set('view engine', 'ejs');

const client = new MongoClient('mongodb+srv://sameer:mongodbatlaspatel007@cluster0.4wk1s.mongodb.net/?retryWrites=true&w=majority');

async function connectDB() {
    await client.connect();
    console.log("Connected to MongoDB");
}
connectDB().catch(console.error);

app.get('/', async (req, res) => {
    const db = client.db('greet');
    const collection = db.collection('greet');
    const user1 = await collection.findOne({ _id: new ObjectId('6767bd6e3536b9456b431c02') });
    const data = { number: user1.number };
    res.render('./views/index.ejs', data);
});

app.post('/greet', async (req, res) => {
    try {
        const db = client.db('greet');
        const collection = db.collection('greet');
        const user1 = await collection.findOne({ _id: new ObjectId('6767bd6e3536b9456b431c02') });
        let num = user1.number + 1;
        const result = await collection.updateOne(
            { _id: new ObjectId('6767bd6e3536b9456b431c02') },
            { $set: { number: num } }
        );

        if (result.matchedCount > 0) {
            res.json({ success: true, message: "Number updated successfully", number: num, redirect: '/' });
        } else {
            res.json({ success: false, message: "Number update failed" });
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});