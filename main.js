var palavrasAlienigenas = ['wrt', 'wrf', 'er', 'ett', 'rftt']
var palavraFragmentada = []
var alfabetoAlienigena = []
var valido = true
var tamanhos = []

console.log(fazer(alfabetoAlienigena))

function fazer(alfabetoAlienigena){
    var checagem = []
    
    for (var str of palavrasAlienigenas){
        var palavra = str.split('')
        
        tamanhos.push(palavra.length)
        
        
        var letra = str[0]
        checagem.push(letra)
        
        if(!alfabetoAlienigena.includes(letra)){
            alfabetoAlienigena.push(letra)
        }
    }

    checarValidacao(checagem)

    if(valido){
        var g = 0
        

        const maiorN = tamanhos.reduce(function(numAnterior, numAtual) { 
            	return numAnterior > numAtual ? numAnterior : numAtual; 
            });

        var maiorNum = maiorN

        while(g == 0){
        //for(i = 0; i < 3000; i++){
            var b = 0
            for(const h of tamanhos){
                if(h == maiorNum){
                    b++
                }
            }
    
            if(b == 1){
                maiorNum = maiorNum - 1
            } else{
                g = 1
            }
        }

        
        for(i = 1; i < maiorNum; i++){
            

            
            for(const letraAnterior of alfabetoAlienigena){
                checagem = []

                for(const str of palavrasAlienigenas){
                    var palavra = str.split('')  
                    var letra = str[i]
                    
                    if(letra != undefined){
                        if(palavra[i - 1] == letraAnterior){
                            checagem.push(letra)
                        }
                    }
                }

                checarValidacao(checagem)
                
    
    
    
    
    
    
    
    
    
    
                    
                    
                if(valido){
                    for(const atual of checagem){
                        if(!alfabetoAlienigena.includes(atual)){  //Se nao existe esta letra no alfabeto

                            if(checagem.indexOf(atual) == 0){ //se esta no inicio da array
                                
                                var next = checagem[1]
                                var nextIndexAlf = alfabetoAlienigena.indexOf(next)

                                if(nextIndexAlf == 0){
                                    alfabetoAlienigena.unshift(atual)
                                } else{
                                    alfabetoAlienigena.splice(nextIndexAlf, 0, atual)
                                }
                                



                                    
                            } else if(checagem.indexOf(atual) == checagem.length - 1){ //se esta no fim da array
                                
                                var anterior = checagem[checagem.length - 2]
                                console.log(checagem)
                                console.log(anterior)
                                var anteriorIndexAlf = alfabetoAlienigena.indexOf(anterior)
                                console.log(anteriorIndexAlf)

                                alfabetoAlienigena.splice(anteriorIndexAlf, 0, atual)
                                console.log(alfabetoAlienigena)
                                



                                
                            } else{ //Se estiver no meio da array
                                
                                var atualIndex = checagem.indexOf(atual)
                                var anterior = checagem[atualIndex - 1]
                                var anteriorIndexAlf = alfabetoAlienigena.indexOf(anterior)
                                var next = alfabetoAlienigena.indexOf(atualIndex + 1)
                                var nextIndexAlf = alfabetoAlienigena.indexOf(next)

                                if(nextIndexAlf == 0){
                                    alfabetoAlienigena.unshift(atual)
                                } else{
                                    alfabetoAlienigena.splice(anteriorIndexAlf, 0, atual)
                                }
                            }
                        }
                    }
                    
                }
                
            }
        }
    }
    
    return alfabetoAlienigena
}


function checarValidacao(checagem){
    for(var check of checagem){   //checa se é valido
        var a = check
        var j = checagem.indexOf(a)
        var k = j + 1
        for(var l of checagem){
            if(a == checagem[k]){
                j++
            } else{
                var n = checagem.lastIndexOf(check)
                if(n != j){
                    valido = false
                    console.log('vish')
                }
            }
            k++
        }
    }
}