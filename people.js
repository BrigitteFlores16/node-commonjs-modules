const Name = require ("./names.js");
const Numhobbies = require ("./hobbies.js");
function people()
{
    const nome = Name('Fiorella','Rodriguez');
    const hobbi = Numhobbies ('cucina', 'pallavolo', 'cantare') ;
    return{...nome,...hobbi};
}

console.log (people().hobbies);

module.exports = people ;
