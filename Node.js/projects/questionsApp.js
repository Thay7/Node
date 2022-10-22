const questions = [ //variavel com um array de perguntas

    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "O que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
]

const ask = (index = 0) => { //função que irá fazer as perguntas

    process.stdout.write(questions[index] + "\n") //processo de saída no terminal quando executamos o app
}

ask() //chamando a função

const answers = [] //criando array que receberá as respostas 

//interação com o app pelo terminal, utilizando process.stdin

process.stdin.on("data", data => { //On é o listener para receber os dados digitados no terminal. Em seguida temos a função data que será rodada todas as vezes que forem inseridos dados no processo

    answers.push(data.toString().trim()) //irá colocar a resposta no array, o toString transforma o dado em string e o trim remove os espaços vazios do começo e fim

    if (answers.length < questions.length) { //se o numero de respostas for menor que o numero de perguntas

        ask(answers.length) //ao entrar aqui a primeira vez, o ask(index) vai ser 1 e assim sucessivamemnte. então quando voltar ao inicio vai para a pergunta seguinte 

    } else { //quando o tamanho do array de respostas for igual ao tamanho do array de perguntas 

        process.exit() //e encerre o processo
    }
})

process.on('exit', () => { //quando o exit for rodado, o process irá ouvir e excutar a função de callback a seguir

    console.log(` 
    Bacana Thay!

    O que você aprendeu hoje foi:
    ${answers[0]}
    
    O que te aborreceu você poderia melhorar foi:
    ${answers[1]}

    O que te deixou feliz foi:
    ${answers[2]}

    Você ajudou ${answers[3]} pessoas hoje!!

    Volte amanhã para novas reflexões
    
    `) //será apresentado no console a mensagem acima, respeitando os espaços e quebras de linha pois foi usado o template literals: ` texto ${dado} texto`

}) 