const app = require('express')();
const cors = require('cors');
const io = require('socket.io')();

// routes
const home = require('./src/routes/home');
const ioServer = require('./src/socket/index')(app);

app.use(cors());
app.use('/', home);

const PORT = process.env.PORT || 5000;

ioServer.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
