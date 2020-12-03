const funcionRandomizadora = (n) =>{
    let ArrayRandom = []
    for(let i = 1; i <= n; i++){
        numero = Math.round(Math.random()*(1 - 0) + 0)
        ArrayRandom.push(numero)
    }
    return ArrayRandom
}

console.log(funcionRandomizadora(5))