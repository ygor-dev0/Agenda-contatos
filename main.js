const form = document.getElementById("form-contatos")
const telefones = []
linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()

})

function adicionaLinha(){
    const nomeForm = document.getElementById("nome-contato")
    const telefoneForm = document.getElementById("telefone-contato")
    let telefoneLimpo = telefoneForm.value.replace(/\D/g, "")
    
    if(telefones.includes(telefoneLimpo)){
        alert(`o telefone ja foi cadastrado`)

    return
    }
    if(telefoneLimpo.length < 10 || telefoneLimpo.length > 11) {
        alert("O número deve conter entre 10 e 11 dígitos.");
        return;
    }

        telefones.push(telefoneForm.value)     

    let linha = `<tr>`
    linha += `<td>${nomeForm.value.charAt(0).toUpperCase() + nomeForm.value.slice(1).toLowerCase()}</td>`
    linha += `<td>${telefoneForm.value}</td>`
    linha += `</tr>`

    linhas += linha

}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
    form.reset()
}