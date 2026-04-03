function contar(){
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var res = document.getElementById('resultado')
    res.innerHTML = ''
    if (passo >= 0){
        alert('Tu es burro. O passo vai ser 1')
        passo = 1
    }
    if (inicio < fim)
        for(i = inicio; i <= fim; i += passo){
            res.innerHTML += `${i} 👉 `
        }
    else{
        for(i = inicio; i >= fim; i -= passo)
            res.innerHTML += `${i} 👉`
    }
    res.innerHTML += '🏁'
}