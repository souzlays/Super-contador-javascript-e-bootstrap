function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    
  } else {
    res.innerHTML = 'Contando: '
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if (p <=0) {
      window.alert('Passo Inválido! Considerando PASSO igual a 1')
      p = 1
    }

    if (i < f) {
      // Contagem crescente
      for (var c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} \u{27A1}`
      }
    } else {
      // Contagem regressiva
        for (var c = i; c >= f; c -= p) {
          res.innerHTML += ` ${c} \u{21AA}`
    }

  }
 }
}
