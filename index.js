const funcionRandomizadora = (n) =>{
    let ArrayPartidosJugados = ""
    for(let i = 1; i <= n; i++){
        numero = Math.round(Math.random()*(1 - 0) + 0)
        if(numero === 1){
            ArrayPartidosJugados = ArrayPartidosJugados + "W"
        } else{
            ArrayPartidosJugados = ArrayPartidosJugados + "L"
        }
    }
    return ArrayPartidosJugados
}

const separadora = (PartidosJugados) => {
    let CantidadDeWW = 0
    let CantidadDeWL = 0
    let CantidadDeLW = 0
    let CantidadDeLL = 0
    let CantidadDeW = 0
    let CantidadDeL = 0

    for(let i = 0; i < PartidosJugados.length; i++){
       switch(PartidosJugados[i]+PartidosJugados[i+1]){
           case "WW" : CantidadDeWW = CantidadDeWW + 1
           break
           case "WL" : CantidadDeWL = CantidadDeWL + 1 
           break
           case "LW": CantidadDeLW = CantidadDeLW +1
           break
           case "LL" : CantidadDeLL = CantidadDeLL + 1
           break
           default: switch(PartidosJugados[i-1]+PartidosJugados[i]){
            case "WW" : CantidadDeWW = CantidadDeWW + 1
            break
            case "WL" : CantidadDeWL = CantidadDeWL + 1 
            break
            case "LW": CantidadDeLW = CantidadDeLW +1
            break
            case "LL" : CantidadDeLL = CantidadDeLL + 1
            break
           }
           break
       }

    }
    for(let i = 0; i < PartidosJugados.length; i++){
        if(PartidosJugados[i] === "W"){
            CantidadDeW = CantidadDeW + 1
        }else{
            CantidadDeL = CantidadDeL + 1
        }
    }
    let ProbabilidadDeWW = (CantidadDeWW/PartidosJugados.length)
    let ProbabilidadDeWL = (CantidadDeWL/PartidosJugados.length)
    let ProbabilidadDeLW = (CantidadDeLW/PartidosJugados.length)
    let ProbabilidadDeLL = (CantidadDeLL/PartidosJugados.length)
    let ProbabilidadDeW  = (CantidadDeW/PartidosJugados.length)
    let ProbabilidadDeL  = (CantidadDeL/PartidosJugados.length)
    let WW = ProbabilidadDeWW/ProbabilidadDeW
    let LW = ProbabilidadDeWL/ProbabilidadDeW
    let WL = ProbabilidadDeLW/ProbabilidadDeL
    let LL = ProbabilidadDeLL/ProbabilidadDeL

    return [`P(W|W) ${WW}`,`P(W|L) ${WL}`,`P(L|W) ${LW}`,`P(L|L) ${LL}`, WW + LW, LL + WL ]
}




let PartidosJugadosTemporada = funcionRandomizadora(32)
console.log(PartidosJugadosTemporada)
console.log(separadora(PartidosJugadosTemporada))


