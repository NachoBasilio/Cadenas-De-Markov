const Solucionador = (Numero) => {
 let cien = true
 while(cien === true)
 {
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
        let ProbabilidadDeWW = (CantidadDeWW/PartidosJugados.length)*100
        let ProbabilidadDeWL = (CantidadDeWL/PartidosJugados.length)*100
        let ProbabilidadDeLW = (CantidadDeLW/PartidosJugados.length)*100
        let ProbabilidadDeLL = (CantidadDeLL/PartidosJugados.length)*100
        let ProbabilidadDeW  = (CantidadDeW/PartidosJugados.length)*100
        let ProbabilidadDeL  = (CantidadDeL/PartidosJugados.length)*100
        let WW = (ProbabilidadDeWW/ProbabilidadDeW)*100
        let LW = (ProbabilidadDeWL/ProbabilidadDeW)*100
        let WL = (ProbabilidadDeLW/ProbabilidadDeL)*100
        let LL = (ProbabilidadDeLL/ProbabilidadDeL)*100
        if( WW + LW && WL + LL !== 100){
            cien === true       
        }else{
            cien === false
            return [`P(W|W) ${WW}%`,`P(W|L) ${WL}%`,`P(L|W) ${LW}%`,`P(L|L) ${LL}%`]  
        }
        
    }
    let PartidosJugadosTemporada = funcionRandomizadora(Numero)
    console.log(PartidosJugadosTemporada)
    return console.log(separadora(PartidosJugadosTemporada))

}   
}

Solucionador(20)

let Juan = document.getElementById("holi")

Juan.addEventListener("click", ()=> {
    let okey = 0
    if(okey = 0){
        let he = document.getElementById("hi")
    he.innerHTML = '<img src="https://pbs.twimg.com/profile_banners/1323683440500350976/1605811854/600x200" />'
    okey = 1
    }else{
        let he = document.getElementById("hi")
    he.innerHTML = '<img  />'
    }
})
