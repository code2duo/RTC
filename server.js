const app = require('express')();
const cors = require('cors');
const { PeerServer } = require('peer');

// routes
const home = require('./src/routes');
const ioServer = require('./src/socket')(app);

app.use(cors());
app.use('/', home);

const PORT = process.env.PORT || 5000;

ioServer.listen(PORT, '0.0.0.0', () => console.log(`Server listening on port ${PORT}`));
