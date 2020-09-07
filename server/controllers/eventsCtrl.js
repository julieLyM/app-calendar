const dataStore = require('../store/dataStore');

const addEvent = async (req, res) => {
  const { body: event } = req;
  await dataStore.addEvent(event);
  res.sendStatus(201);
};

const getEvents = async (req, res) => {
  const {
    query: { page, sort, order },
  } = req;
  const data = await dataStore.allEvents(page, sort, order);
  res.send(data);
};

module.exports = { getEvents, addEvent };
