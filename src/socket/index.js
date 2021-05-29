/*
 * Wrapper for all socket.io events
 */
const ioEvents = function (io) {
    io.on('connection', (socket) => {
        socket.on('join-room', (roomId, userId) => {
            socket.join(roomId);
            socket.to(roomId).broadcast.emit('user-connected', userId);

            socket.on('disconnect', () => {
                socket.to(roomId).broadcast.emit('user-disconnected', userId);
            });
        });
    });
}

/*
 * Initialize Socket.io
 */
const init = (app) => {
    const server = require('http').createServer(app);
    const io = require('socket.io')(server, {
        cors: {
            origin: "*",
            methods: ['GET', 'POST']
        }
    });

    ioEvents(io);

    return server;
}

module.exports = init;
