//Herdando do EventEmitter

const {inherits} = require ('util') //puxando do modulo "util", a função inherits e ela irá herdar as funcionalidades do event emitter para a função Character
const {EventEmitter} = require ('events') //funcionalidades o event emitter que serãoo herdadas por Character

function Character(name) { //qaundo executar a função fazer "new character" vai trazer as opçoes que tem no event emitter para dentro da função
    this.name = name
}

inherits(Character, EventEmitter) //funçao que recebe como primeiro argumento a função construtora Character e dentro dela, agora eu vou ter opçoes do event emitter

const chapolin = new Character('Chapolin'); //criando um novo personagem

chapolin.on('help', () => console.log(`Eu! O ${chapolin.name} colorado!`))

console.log('Oh! E agora quem poderá me defender?')
chapolin.emit('help')

