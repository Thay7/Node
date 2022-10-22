//setInterval irá rodar uma função N vezes depois de X milissegundos

const timeOut = 1000
const checking = () => console.log('checking')

let interval = setInterval(checking, timeOut)

setTimeout( () => clearInterval(interval), 3000)//o 'cheking' roda até os 3 segundos, após isso, essa função cancela

