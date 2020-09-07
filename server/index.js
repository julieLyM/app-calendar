const express = require('express');
const app = express();

const middlewares = require('./middlewares');
const routes = require('./routes');

middlewares(app);
routes(app);

// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname + '/../client/build/index.html'))
// );

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on server ${PORT}`));
