var secret = require('./secret');

module.exports = {
    mongoUrl: `mongodb+srv://${secret.username}:${secret.password}@cluster0-v2sts.mongodb.net/ShopFromCloud?retryWrites=true&w=majority`
}