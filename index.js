const arr = [/*

        Olá EBAC, aqui está a resposta do Desafio proposto no grupo do Discord.

        Foi muito interessante e realmente desafiador desenvolver este código, mas eu agradeço a 
    oportunidade, pois eu sempre tive muitas dúvidas na questão das Arrays, no tratamento delas
    e etc.

        Estou aberto a criticas construtivas sobre outras formas de como eu poderia ter feito
    este código

        Para executá-lo, basta apagar toda esta mensagem e preencher a Array com os IDs 
    (apenas números)
        A quantidade de números assim como o tamanho destes é ilimitado


        Agradeço a atenção
        Atenciosamente:

    Guerra_BR
    vulgo Raposa da JavaFox
    
*/];
var lista = []
var IDs = []
var nomes = []
var repeticoes = []
var repetidos = []
console.log(countDuplicates(arr));

function countDuplicates(arr) {

    for (const str of arr) {
        if(IDs.includes(str)){
            var l = IDs.indexOf(str)
            var v = lista[l]
            v++
            lista.splice(l, 1, v)
            
        } else{
            IDs.push(str)
            lista.push(1)
        }
    }

    console.log('Lista dos IDs dos itens')
    console.log(IDs)
    console.log('Quantidade repetições de cada item')
    console.log(lista)
    

    const maiorNdeRepeticoes = lista.reduce(function(numAnterior, numAtual) { 
    	return numAnterior > numAtual ? numAnterior : numAtual; 
    });
    console.log('Maior numero de repetições')
    console.log(maiorNdeRepeticoes)


    var b = 0
    for(i = 0; lista.length > i; i++){
        
        if(lista[i]==maiorNdeRepeticoes){
            repeticoes.push(i)
        }
    }

    console.log('Index de onde estão os maiores números')
    console.log(repeticoes)


    for(i = 0; i < repeticoes.length; i++){
        var ID = repeticoes[i]
        var rep = IDs[ID]
        
        repetidos.push(rep)
    }
    
    
    console.log('Estes são os números que se repetem pela quantidade máxima de vezes')
    console.log(repetidos)

    const menorNumMaisRepetido = repetidos.reduce(function(numAnterior, numAtual) { 
    	return numAnterior < numAtual ? numAnterior : numAtual; 
    });

    console.log('E este é o resultado do desafio proposto')
    
    return menorNumMaisRepetido;
}