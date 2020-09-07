const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

const auth = require('../auth.js');
const url = 'mongodb://localhost:27017';

const PAGE = 2;

const initializeDatabase = async () => {
  const client = await MongoClient.connect(url, {
    auth,
    poolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  db = client.db('calendar');
};

const allEvents = async (page, sort, order) => {
  const events = await db
    .collection('events')
    .find()
    .sort({ [sort]: Number(order) })
    .skip(PAGE * Number(page))
    .limit(PAGE)
    .toArray();
  return events;
};

const addEvent = (event) => {
  return db.collection('events').insertOne(event);
};

async function initialize() {
  await initializeDatabase();
}

initialize();

module.exports = { allEvents, addEvent };
