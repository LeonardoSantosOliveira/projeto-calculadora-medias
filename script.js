var form = document.getElementById('form-atividade')
let imgAprovado = '<img src="images/aprovado.png" alt="Emoji celebrando" />'
let imgReprovado = '<img src="images/reprovado.png" alt="Emoji decepcionado" />'
let atividades = []
let notas = []
let spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
let spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
let notaMinima = Number(prompt('Digite a nota mínima:'))

let linhas = ''
form.addEventListener('submit', function(e){
    e.preventDefault()
    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()
})

function adicionaLinha(){
        var inputNomeAtividade = document.getElementById('nome-atividade')
    var inputNotaAtividade = document.getElementById('nota-atividade')

    if (atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`)
    } else{
        atividades.push(inputNomeAtividade.value)
        notas.push(Number(inputNotaAtividade.value))
    
        let linha = '<tr>'
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += '</tr>'
    
        linhas += linha
    }


    inputNomeAtividade = ''
    inputNotaAtividade = ''
}

function atualizaTabela(){
    let corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal(){
    let mediaFinal = calculaMediaFinal()

    document.getElementById('media-final-valor').innerHTML = mediaFinal
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
}

function calculaMediaFinal(){
    var somaDasNotas = 0

    for (var i in notas){
        somaDasNotas += notas[i]
    }

    return somaDasNotas / notas.length
    
}