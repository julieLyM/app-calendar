const MongoClient = require('mongodb').MongoClient;
const auth = require('../auth.js');

const url = 'mongodb://localhost:27017';

const eventName = [
  {
    name: 'Event1',
  },
  {
    name: 'Event2',
  },
  {
    name: 'Event3',
  },
  {
    name: 'Event4',
  },
];

const events = [
  {
    title: 'hello event today',
    start: '2020, 9, 7',
    end: '2020, 9, 8',
  },
  {
    title: 'hello event next day',
    start: '2020, 9, 9',
    end: '2020, 9, 10',
  },
];

let db = null;

const initializeDatabaseList = async () => {
  const client = await MongoClient.connect(url, {
    auth,
    poolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  db = client.db('CalendarJulix');
};

const addEvent = async (events) => {
  try {
    const { result } = await db.collection('allEvents').insertMany(events);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

const getEvent = async () => {
  const event = await db.collection('allEvents').find().toArray();
  return event;
};

const clearCollection = async () => {
  try {
    const { result } = await db.dropDatabase();
    console.log(result);
  } catch (e) {
    console.error(e);
  }
};

async function initialize() {
  await initializeDatabaseList();
  await clearCollection();
  await addEvent(events);
}

initialize();
