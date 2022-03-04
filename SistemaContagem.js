let numeroAlunos = 10;

for(let contador = 0; contador < numeroAlunos; contador++) {
    // Resto % -> retorna o resto de uma divisão inteira
    if(contador == 0)
        console.log('O primeiro número é o ZERO.')
    else if(contador % 2 == 0){
        // INTERPOLAÇÃO -> ao usar crase ` para fazer a frase e colocar o cifrão $ junto com chaves {} para colocar a variável.
        console.log(`O número ${contador} é PAR.`)
    } else if(contador % 2 == 1) {
        // CONCATENIZAÇÃO -> usa aspas " para abrir e fechar trechos de texto de retorno, mas precisa colocar o simbolo de mais + para colocar a variável.
        console.log('O número ' + contador + ' é ÍMPAR.') 
    }
}