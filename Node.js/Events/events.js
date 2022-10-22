const { EventEmitter } = require('events') //função nativa do NodeJS

const evv = new EventEmitter() //a variavel recebe um novo EventEmitter, que é um classe e vou receber o obejto que ele irá me retornar

ev.once('saySomething', (message) => { //sempre ouvindo os eventos e passando uma ação, neste caso um função
    console.log('Eu ouvi você:' , message)
})

//emitindo/disparando eventos:
ev.emit('saySomething', "Thay") //emitindo evento, precisa de algo para ouvir

