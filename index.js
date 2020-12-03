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

    for(let i = 0; i < PartidosJugados.length; i++){
       switch(PartidosJugados[i]+PartidosJugados[i+1]){
           case "WW" : CantidadDeWW = CantidadDeWW + 1
           break
           case "WL" : CantidadDeWL = CantidadDeWL + 1 
           break
           case "LW" : CantidadDeLW = CantidadDeLW + 1
           break
           case "LL" : CantidadDeLL = CantidadDeLL + 1
           break
           default: switch(PartidosJugados[i-1]+PartidosJugados[i]){
            case "WW" : CantidadDeWW = CantidadDeWW + 1
            break
            case "WL" : CantidadDeWL = CantidadDeWL + 1 
            break
            case "LW" : CantidadDeLW = CantidadDeLW + 1
            break
            case "LL" : CantidadDeLL = CantidadDeLL + 1
            break
           }
           break
       }
    }
    return [CantidadDeLW, CantidadDeWW, CantidadDeLL, CantidadDeWL]
}




let PartidosJugadosTemporada = funcionRandomizadora(32)
console.log(PartidosJugadosTemporada)
console.log(separadora(PartidosJugadosTemporada))


