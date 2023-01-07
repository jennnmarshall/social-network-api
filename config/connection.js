
const { connect, connection } = require('mongoose');

// require Mongoose for connection to MongoDB
connect(process.env.MONGODB_URI || 'mongodb://localhost/socialNetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;