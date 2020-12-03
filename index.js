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
    let CantidadDeW = 0
    let CantidadDeL = 0
    for(let i = 0; i < PartidosJugados.length; i++){
        if(PartidosJugados[i] === "W"){
            CantidadDeW = CantidadDeW + 1
        } else{
            CantidadDeL = CantidadDeL + 1
        }
    }
    return [`W = ${CantidadDeW}`, `L = ${CantidadDeL}`]
}

let PartidosJugadosTemporada = funcionRandomizadora(32)

console.log(separadora(PartidosJugadosTemporada))
