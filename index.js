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
                default: 
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
            return [WW,LW,WL,LL,PartidosJugados[PartidosJugados.length-1],PartidosJugados]  
        }
        
    }
    let PartidosJugadosTemporada = funcionRandomizadora(Numero)
    return separadora(PartidosJugadosTemporada)
}   
}
const corregidor = (n) =>{
    let llamada = Solucionador(n)
    let pendedor = true
    while(pendedor===true){
        if(llamada != undefined){
            return llamada
        }else{
            llamada = Solucionador(n)
        }
    }
}

const boton = document.getElementById("botton")

boton.addEventListener("click", ()=>{
    let numero = document.getElementById("num").value
    let objeto = corregidor(numero)
    let VI1 = document.getElementById("VI1")
    let VI2 = document.getElementById("VI2")
    let VF1 = document.getElementById("VF1")
    let VF2 = document.getElementById("VF2")
    let display = document.getElementById("display")
    display.innerText = objeto[5]
    let WWimp = document.getElementById("WW")
    WWimp.innerText = objeto[0]
    let LWimp = document.getElementById("LW")
    LWimp.innerText = objeto[1]
    let WLimp = document.getElementById("WL")
    WLimp.innerText = objeto[2]
    let LLimp = document.getElementById("LL")
    LLimp.innerText = objeto[3]
    console.log(objeto)
    if(objeto[4]!=="W"){  
        VI1.innerText = "1"
        VI2.innerText = "0"
        VF1.innerText = objeto[2]
        VF2.innerText = objeto[3]
    }else{
        VI1.innerText = "0"
        VI2.innerText = "1"
        VF1.innerText = objeto[0]
        VF2.innerText = objeto[1]
    }

})

