const app = require('express')();
const cors = require('cors');

// routes
const home = require('./src/routes');
const ioServer = require('./src/socket')(app);

app.use(cors());
app.use('/', home);

const PORT = process.env.PORT || 5000;

ioServer.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
