var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pgSchema = new Schema({
    nome_pg: { type: String, required: true },
    classe: { type: String, required: true },
    razza: { type: String, required: true },
    allineamento1: { type: String, required: true },
    allineamento2: { type: String, required: true },
    forza: { type: Number, required: true },
    destrezza: { type: Number, required: true },
    costituzione: { type: Number, required: true },
    intelligenza: { type: Number, required: true },
    saggezza: { type: Number, required: true },
    carisma: { type: Number, required: true },
  //  nome_utente: { type: String, required: true },
   // nome_party: { type: String }
});

module.exports = mongoose.model('Personaggi', pgSchema);