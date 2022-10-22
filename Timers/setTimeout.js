//setTimeout vai rodar uma função depois de X milissegundos

const timeOut = 3000
const finished = () => console.log('done!')

setTimeout(finished, timeOut) //a função definida acima será chamada de volta(callback), após o tempo estimado em milissegundos 
console.log('Mostrar') //será impresso autoamticamente, ou seja, antes do 'done!' pois ele só irá ser mostrado após o tempo estimado em milissegundos