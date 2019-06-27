let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const farmerSchema = Schema({
    state: String,
    avgAge: String
});
const Farmerlist = module.exports = mongoose.model('Farmerlist', farmerSchema);