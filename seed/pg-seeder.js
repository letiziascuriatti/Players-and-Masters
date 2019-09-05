var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Playersandmasters', { useNewUrlParser: true }).then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});

var Pg = require ('../models/personaggi');

var pgs = [
    new Pg({
        nome_pg: 'Smug',
        classe: 'Barbaro',
        razza: 'Mezzorco',
        allineamento1: 'Caotico',
        allineamento2: 'Neutrale',
        forza: 16,
        destrezza: 11,
        costituzione: 17,
        intelligenza: 8,
        saggezza: 6,
        carisma: 6
}),

new Pg({
    nome_pg: 'Gimble',
    classe: 'Bardo',
    razza: 'Mezzelfo',
    allineamento1: 'Neutrale',
    allineamento2: 'Neutrale',
    forza: 9,
    destrezza: 14,
    costituzione: 11,
    intelligenza: 13,
    saggezza: 14,
    carisma: 17,
}),

new Pg({
    nome_pg: 'Eberk',
    classe: 'Chierico',
    razza: 'Nano',
    allineamento1: 'Legale',
    allineamento2: 'Buono',
    forza: 14,
    destrezza: 8,
    costituzione: 15,
    intelligenza: 10,
    saggezza: 16,
    carisma: 12,
}),

new Pg({
    nome_pg: 'Vadania',
    classe: 'Druido',
    razza: 'Elfo',
    allineamento1: 'Neutrale',
    allineamento2: 'Buono',
    forza: 11,
    destrezza: 16,
    costituzione: 10,
    intelligenza: 10,
    saggezza: 16,
    carisma: 10,
}),

new Pg({
    nome_pg: 'Tordek',
    classe: 'Guerriero',
    razza: 'Umano',
    allineamento1: 'Neutrale',
    allineamento2: 'Buono',
    forza: 16,
    destrezza: 10,
    costituzione: 14,
    intelligenza: 8,
    saggezza: 10,
    carisma: 12,
}),

new Pg({
    nome_pg: 'Ember',
    classe: 'Monaco',
    razza: 'Draconide',
    allineamento1: 'Neutrale',
    allineamento2: 'Neutrale',
    forza: 13,
    destrezza: 16,
    costituzione: 12,
    intelligenza: 13,
    saggezza: 14,
    carisma: 8,
}),

new Pg({
    nome_pg: 'Alhandra',
    classe: 'Paladino',
    razza: 'Aasimar',
    allineamento1: 'Legale',
    allineamento2: 'Buono',
    forza: 16,
    destrezza: 12,
    costituzione: 15,
    intelligenza: 8,
    saggezza: 10,
    carisma: 13,
}),

new Pg({
    nome_pg: 'Cerqus',
    classe: 'Ranger',
    razza: 'Felinide',
    allineamento1: 'Neutrale',
    allineamento2: 'Buono',
    forza: 8,
    destrezza: 16,
    costituzione: 14,
    intelligenza: 14,
    saggezza: 14,
    carisma: 10,
}),

new Pg({
    nome_pg: 'Kerwyn',
    classe: 'Ladro',
    razza: 'Halfling',
    allineamento1: 'Caotico',
    allineamento2: 'Neutrale',
    forza: 8,
    destrezza: 14,
    costituzione: 16,
    intelligenza: 12,
    saggezza: 10,
    carisma: 14,
}),

new Pg({
    nome_pg: 'Saruman',
    classe: 'Stregone',
    razza: 'Gnomo',
    allineamento1: 'Caotico',
    allineamento2: 'Neutrale',
    forza: 10,
    destrezza: 13,
    costituzione: 14,
    intelligenza: 12,
    saggezza: 10,
    carisma: 15,
}),

new Pg({
    nome_pg: 'Belzy',
    classe: 'Warlock',
    razza: 'Tiefling',
    allineamento1: 'Caotico',
    allineamento2: 'Malvagio',
    forza: 8,
    destrezza: 10,
    costituzione: 14,
    intelligenza: 10,
    saggezza: 8,
    carisma: 16,
}),

new Pg({
    nome_pg: 'Talahassi',
    classe: 'Mago',
    razza: 'Centauro',
    allineamento1: 'Caotico',
    allineamento2: 'Neutrale',
    forza: 10,
    destrezza: 10,
    costituzione: 14,
    intelligenza: 17,
    saggezza: 13,
    carisma: 9,
})

];

var done = 0;

for (var i=0; i <pgs.length; i++){

    pgs[i].save(function(err, result){
        done++;
        if (done === pgs.length){
            exit();
        }
    });
};

function exit(){
    mongoose.disconnect();
}

