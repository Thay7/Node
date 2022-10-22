function getFlagValue (flag) {
    
    const index = process.argv.indexOf(flag) + 1 //procurando o número do index da flag passada como argumento pra função e somando 1 nessa posição encontrada
    return process.argv[index] //retornando
}

module.exports = getFlagValue; //exportando função 



