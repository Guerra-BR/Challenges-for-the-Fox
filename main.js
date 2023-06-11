var palavrasAlienigenas = ['wrt', 'wrf', 'er', 'ett', 'rftt']
var palavraFragmentada = []
var alfabetoAlienigena = []
var valido = true
var tamanhos = []
var letrasSemReferencia = []
var letrasSemReferenciaRef = []
var oAlfabeto = ''

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
    adicionar(palavrasAlienigenas) //Adiciona as letras, mas nao adicionna letras sem referencia mas as coloca em uma nova array

    remover(letrasSemReferencia) 

    for(i = 0; i < letrasSemReferencia.length; i++){ //Adiciona as letras sem referencia
        reOrganizar(letrasSemReferencia)

        reAdicionar(letrasSemReferencia)
    }

    if(valido){
        while(letrasSemReferencia.length != 0){
            var entrada = letrasSemReferencia[0]
            alfabetoAlienigena.push(entrada)

            remover(letrasSemReferencia) 

            reOrganizar(letrasSemReferencia)

            reAdicionar(letrasSemReferencia)

            remover(letrasSemReferencia) 
        }

        oAlfabeto = alfabetoAlienigena.toString()
        oAlfabeto.replace(',', '')
    } else{
        oAlfabeto = ''
    }


    return oAlfabeto
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



function adicionar(palavrasAlienigenas){
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

                                if(alfabetoAlienigena.includes(next)){
                                    if(nextIndexAlf == 0){
                                        alfabetoAlienigena.unshift(atual)
                                    } else{
                                        alfabetoAlienigena.splice(nextIndexAlf, 0, atual)
                                    }
                                } else{
                                    if(!letrasSemReferencia.includes(atual)){
                                        letrasSemReferencia.push(atual)
                                    }
                                    var anterior = '0'
                                    letrasSemReferenciaRef.push(anterior.concat(atual, next))
                                }

                            } else if(checagem.indexOf(atual) == checagem.length - 1){ //se esta no fim da array
                                
                                var anterior = checagem[checagem.length - 2]
                                var anteriorIndexAlf = alfabetoAlienigena.indexOf(anterior)

                                if(alfabetoAlienigena.includes(anterior)){
                                    alfabetoAlienigena.splice(anteriorIndexAlf + 1, 0, atual)
                                } else{
                                    if(!letrasSemReferencia.includes(atual)){
                                        letrasSemReferencia.push(atual)
                                    }
                                    letrasSemReferenciaRef.push(anterior.concat(atual, '0'))
                                }

                            } else{ //Se estiver no meio da array
                                
                                var atualIndex = checagem.indexOf(atual)
                                var anterior = checagem[atualIndex - 1]
                                var anteriorIndexAlf = alfabetoAlienigena.indexOf(anterior)
                                var next = alfabetoAlienigena.indexOf(atualIndex + 1)
                                var nextIndexAlf = alfabetoAlienigena.indexOf(next)

                                if(alfabetoAlienigena.includes(anterior)){
                                    if(nextIndexAlf == 0){
                                        alfabetoAlienigena.unshift(atual)
                                    } else{
                                        alfabetoAlienigena.splice(anteriorIndexAlf + 1, 0, atual)
                                    }
                                } else if(alfabetoAlienigena.includes(next)){
                                    if(nextIndexAlf == 0){
                                        alfabetoAlienigena.unshift(atual)
                                    } else{
                                        alfabetoAlienigena.splice(nextIndexAlf, 0, atual)
                                    }
                                } else{
                                    if(!letrasSemReferencia.includes(atual)){
                                        letrasSemReferencia.push(atual)
                                    }
                                    letrasSemReferenciaRef.push(anterior, atual, next)
                                }
                            }
                        } else{

                            if(checagem.indexOf(atual) == 0){ //se esta no inicio da array
                                var next = checagem[1]
                                var nextIndexAlf = alfabetoAlienigena.indexOf(next)
                                var atualIndex = alfabetoAlienigena.indexOf(atual)

                                if(atualIndex > nextIndexAlf){
                                    alfabetoAlienigena.splice(atualIndex, 1)
                                    atualIndex.splice(nextIndexAlf, 0, atual)
                                }

                            } else if(checagem.indexOf(atual) == checagem.length - 1){ //se esta no fim da array
                                var anterior = checagem[checagem.length - 2]
                                var anteriorIndexAlf = alfabetoAlienigena.indexOf(anterior)
                                var atualIndex = alfabetoAlienigena.indexOf(atual)

                                if(atualIndex < anteriorIndexAlf){
                                    alfabetoAlienigena.splice(atualIndex, 1)
                                    alfabetoAlienigena.splice(anteriorIndexAlf, 0, atual)
                                }

                            } else{ //Se estiver no meio da array
                                var atualIndex = checagem.indexOf(atual)
                                var next = checagem[atualIndex + 1]
                                var anterior = checagem[atualIndex - 1]

                                var anteriorIndexAlf = alfabetoAlienigena.indexOf(anterior)
                                var nextIndexAlf = alfabetoAlienigena.indexOf(next)
                                var atualIndex = alfabetoAlienigena.indexOf(atual)

                                if(atualIndex < anteriorIndexAlf){
                                    alfabetoAlienigena.splice(atualIndex, 1)
                                    alfabetoAlienigena.splice(anteriorIndexAlf, 0, atual)
                                }

                                if(atualIndex > nextIndexAlf){
                                    alfabetoAlienigena.splice(atualIndex, 1)
                                    atualIndex.splice(nextIndexAlf, 0, atual)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}


function remover(letrasSemReferencia){
    for(const letra of alfabetoAlienigena){
        if(letrasSemReferencia.includes(letra)){ 
            var l = letrasSemReferencia.indexOf(letra)
            letrasSemReferencia.splice(l, 1)
        }
    }

    for(const str of letrasSemReferenciaRef){
        var a = str[1]

        if(!letrasSemReferencia.includes(a)){
            var l = letrasSemReferenciaRef.indexOf(str)
            letrasSemReferenciaRef.splice(l, 1)
        }
    }
}

function reOrganizar(letrasSemReferenciaRef){
    var reconstrucao = []

    var letraSeguinte 
    var letraAnterior

    var anteriorComparacao
    var seguinteComparacao

    var letraSeguinteIndex
    var letraAnteriorIndex

    var anteriorComparacaoIndex
    var seguinteComparacaoIndex

    for(const letra of letrasSemReferencia){
        for(const str of letrasSemReferenciaRef){
            var a = str[1]

            if(a == letra){
                anteriorComparacao = str[0]
                if(anteriorComparacao != 0){
                    letraAnterior = anteriorComparacao
                }

                seguinteComparacao = str[2]
                if(seguinteComparacao != 0){
                    letraSeguinte = seguinteComparacao
                }
            }
        }

        letraAnteriorIndex = alfabetoAlienigena.indexOf(letraAnterior)
        letraSeguinteIndex = alfabetoAlienigena.indexOf(letraSeguinte)

        for(const str of letrasSemReferenciaRef){
            var a = str[1]

            if(a == letra){
                anteriorComparacao = str[0]
                seguinteComparacao = str[2]

                if(anteriorComparacao != 0){
                    anteriorComparacaoIndex = alfabetoAlienigena.indexOf(anteriorComparacao)

                    if(letraAnteriorIndex < anteriorComparacaoIndex){
                        letraAnterior = anteriorComparacao
                    }
                }

                if(seguinteComparacao != 0){
                    seguinteComparacaoIndex = alfabetoAlienigena.indexOf(seguinteComparacao)

                    if(letraSeguinteIndex > seguinteComparacaoIndex){
                        letraSeguinte = seguinteComparacao
                    }
                }
            }
        }

        var novaLetra = letraAnterior.concat(letra, letraSeguinte)
        reconstrucao.push(novaLetra)
    }

    letrasSemReferenciaRef = reconstrucao
}


function reAdicionar(letrasSemReferencia){

    for(const letra of letrasSemReferencia){

        checagem = letrasSemReferencia

        if(!alfabetoAlienigena.includes(letra)){
            for(const atual of checagem){
                var next
                var anterior

                for(const verif of letrasSemReferenciaRef){
                    if(verif[1] == atual){
                        next = verif[0]
                        anterior = verif[2]
                    }
                }

                if(!alfabetoAlienigena.includes(atual)){  //Se nao existe esta letra no alfabeto

                    if(checagem.indexOf(atual) == 0){ //se esta no inicio da array
                        
                        var nextIndexAlf = alfabetoAlienigena.indexOf(next)

                        if(alfabetoAlienigena.includes(next)){
                            if(nextIndexAlf == 0){
                                alfabetoAlienigena.unshift(atual)
                            } else{
                                alfabetoAlienigena.splice(nextIndexAlf, 0, atual)
                            }
                        } else{
                            letrasSemReferencia.push(atual)
                        }
                    } else if(checagem.indexOf(atual) == checagem.length - 1){ //se esta no fim da array
                        anterior = checagem[checagem.length - 2]
                        var anteriorIndexAlf = alfabetoAlienigena.indexOf(anterior)

                        if(alfabetoAlienigena.includes(anterior)){
                            alfabetoAlienigena.splice(anteriorIndexAlf + 1, 0, atual)
                        } else{
                            letrasSemReferencia.push(atual)
                        }

                    } else{ //Se estiver no meio da array
                        var atualIndex = checagem.indexOf(atual)
                        anterior = checagem[atualIndex - 1]
                        var anteriorIndexAlf = alfabetoAlienigena.indexOf(anterior)
                        next = alfabetoAlienigena.indexOf(atualIndex + 1)
                        var nextIndexAlf = alfabetoAlienigena.indexOf(next)

                        if(alfabetoAlienigena.includes(anterior)){
                            if(nextIndexAlf == 0){
                                alfabetoAlienigena.unshift(atual)
                            } else{
                                alfabetoAlienigena.splice(anteriorIndexAlf + 1, 0, atual)
                            }
                        } else if(alfabetoAlienigena.includes(next)){
                            if(nextIndexAlf == 0){
                                alfabetoAlienigena.unshift(atual)
                            } else{
                                alfabetoAlienigena.splice(nextIndexAlf, 0, atual)
                            }
                        } else{
                            letrasSemReferencia.push(atual)
                        }
                    }
                }
            }
        }
    }
}