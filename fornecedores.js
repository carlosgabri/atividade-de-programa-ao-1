const formulario = document.querySelector('#formularioFornecedores');
const inputNome = document.querySelector('#nome');
const inputTelefone = document.querySelector('#telefone');
const inputEmail = document.querySelector('#email');
const inputProduto = document.querySelector('#produto');
const fornecedores = document.querySelector('#fornecedores');
const mensagens = document.querySelector('#mensagens');
var dic = {};
var array = [];

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (inputNome.value === '' || inputEmail.value === '' || inputProduto.value === '' || inputTelefone === '') {
        mensagens.style.display = 'block';
        mensagens.style.background = 'red';
        mensagens.innerHTML = 'Preencha todos os campos!';

    } else if(testaExistente(array) === true){

        const li = document.createElement('li');
        li.innerHTML = `Nome: ${inputNome.value} <br>Telefone: ${inputTelefone.value} <br>Email: ${inputEmail.value} <br>Produto: ${inputProduto.value}`;       
        
        dic = {Nome: inputNome.value, Telefone: inputTelefone.value, Email: inputEmail.value, Produto: inputProduto.value};
        array.push(dic);
        
        li.addEventListener('click', (e) => {            
            const deletar = confirm('Você realmente gostaria de deletar este fornecedor?');
            var x = e.target;
            console.log(x);
            if (deletar) {                
                e.target.remove();
            }
        })        
        fornecedores.appendChild(li);        
        
        mensagens.style.display = 'none';
        
        inputNome.value = '';
        inputTelefone.value = '';
        inputEmail.value = '';
        inputProduto.value = '';
    }   
})

function testaExistente(array){

    var retorno = true;

    array.forEach(dic =>{
        if(dic.Nome === inputNome.value)
        {
            mensagens.style.display = 'block';
            mensagens.style.background = 'red';
            mensagens.innerHTML = 'Já existe um fornececor com este nome';            
            retorno = false;
        }
        else if(dic.Email === inputEmail.value)
        {
            mensagens.style.display = 'block';
            mensagens.style.background = 'red';
            mensagens.innerHTML = 'Já existe um fornececor com este email';
            retorno = false;
        }
        else if(dic.Telefone === inputTelefone.value)
        {
            mensagens.style.display = 'block';
            mensagens.style.background = 'red';
            mensagens.innerHTML = 'Já existe um fornececor com este telefone';
            retorno = false;
        }        
    });
    return retorno;
}