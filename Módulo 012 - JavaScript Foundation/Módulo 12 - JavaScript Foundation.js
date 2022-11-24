/*JS Aplicacao Calculadora de Media */

let aviso = document.querySelector('#aviso')
let formulario = document.querySelector('form')

let btnCalcular = document.querySelector('#btnCalcular')
let btnLimpar = document.querySelector('#btnLimpar')

// selecionar caixas de texto por id
let cxNota1 = document.querySelector('#nota1')
let cxNota2 = document.querySelector('#nota2')
let cxNota3 = document.querySelector('#nota3')
let cxMedia = document.querySelector('#media')
let cxSituacao = document.querySelector('#situacao')

// CALCULAR MEDIA
function calcularMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3
}

// DEFINIR SITUACAO FINAL COM BASE NA MEDIA
function situacaoFinal(mediaFinal) {
    let situacaoFinal = ''
}

// FORMATAR A CAIXA DE SITUACAO FINAL
function formatarSituacao(situacaoFinal) {
    console.log('Situação Final ' + situacaoFinal)
    switch(situacaoFinal) {

        default:
            console.log('Situação Indefinida')
    } // fim do switch case

}

// VALIDAR E GERAR FLASH MESSAGE
function validarNumero(numero) {
    let num1 = cxNota1.value
    let num2 = cxNota2.value
    let num3 = cxNota3.value
    if(num1|| num2|| num3)
     {
        formulario.reset() // limpar form
        aviso.textContent= 'Digite uma nota entre 0.0 e 10.0'
        aviso.classList.add('alerta')
        setTimeout(function(){
            aviso.textContent = ''
            aviso.classList.remove('alerta')
        }, 2000);
    }
}

// CALCULAR A MEDIA APOS O CLICK NO BOTAO
btnCalcular.addEventListener('click', function(e) {
    console.log('Calcular Média')
// pegar o valor que esta dentro das caixas
// usar metodo parseFloat p converter string p float
    let nota1 = parseFloat(cxNota1.value)
    let nota2 = parseFloat(cxNota2.value)
    let nota3 = parseFloat(cxNota3.value)
    let media = calcularMedia(nota1, nota2, nota3)
    
    console.log(nota1)
    console.log(nota2)
    console.log(nota3)
    console.log(media)

    if(isNaN(media) || media < 0) {
        console.log("Não é um número")
        cxSituacao.value = ''
    } else {
        cxMedia.value = parseFloat(media)
        cxSituacao.value = situacaoFinal(media)
        formatarSituacao(situacaoFinal(media))
    }
    e.preventDefault()
})

// APOS LIMPAR TIRAR AS CLASS DA CX SITUACAO
btnLimpar.addEventListener('click', function() {
    
})