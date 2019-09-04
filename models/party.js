var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    nome_party: { type: String, required: true },
    nome_utente: { type: String },
    numero_pg: { type: Number, required: true },

});

module.exports = mongoose.model('party', schema);