var lista_pet = getStorage() || [];
var cadastro = {};

function send(){
    cadastro = {
        nome_pet: document.getElementById('input-pet-nome').value,
        idade_pet: document.getElementById('input-pet-idade').value,
        categoria_pet: document.getElementById('input-pet-categoria').value,
        raca_pet: document.getElementById('input-pet-raca').value,
        tamanho_pet: document.getElementById('input-pet-tamanho').value,
        peso_pet: document.getElementById('input-pet-peso').value,
        coleira_pet: document.getElementById('input-pet-coleira').value,
        descricao_pet: document.getElementById('input-pet-descricao').value,
        image_pet: document.getElementById('pet-img').src,
        nome_contato: document.forms['form-cadastro']['input-contato-nome'].value,
        telefone_contato: document.forms['form-cadastro']['input-contato-telefone'].value,
        email_contato: document.forms['form-cadastro']['input-contato-email'].value
    }

    validaDados(cadastro);

    // Armazena a variável cadastro no localStorage do navegador
    localStorage.setItem(localStorage.length, JSON.stringify(cadastro));
}

function validaDados(obj){
    if(
        obj.categoria_pet === undefined ||
        obj.tamanho_pet === undefined ||
        obj.coleira_pet === undefined ||
        obj.descricao === undefined ||
        obj.nome_contato === undefined ||
        obj.telefone_contato === undefined ||
        obj.email_contato === undefined
    ){
        erro('Dados de cadastro incompletos');
        return;
    }
}

function getStorage(){
    var result = []

    let i = 0;
    for(property in localStorage){
        if(i>= localStorage.length) return result;
        
        let data = JSON.parse(localStorage.getItem(property));
        result.push(data);
        console.log(data)
        i++;
    }
    return result;
}

function erro(error){
    console.error(error);
}

function preview(){
    var file = document.getElementById('input-pet-image').files[0];
    var img = document.getElementById('pet-img');
    var reader = new FileReader();
    
    if(
        file.type !=  'image/jpeg' &&
        file.type !=  'image/gif' &&
        file.type !=  'image/png'
    ){
        erro('Tipo de imagem inválido')
        return;
    }
    reader.readAsDataURL(file);
    reader.onloadend = ()=>{
        img.src = reader.result
        cad1.image = reader.result;
    }
}

function clickFile(){
    var fileInput = document.getElementById('input-pet-image')
    fileInput.click()
}




// Lógica para armazenar e mostrar pets cadastrados

var cad1 = {
    nome: "lupo",
    idade: 3,
    categoria: 'cachorro',
    raca: 'puddle',
    tamanho: 'pequeno',
    peso: '2kg',
    coleira: '#fff',
    descricao: 'Sei não',
    nome_contato: 'victhor',
    telefone: '85989715291',
    email: 'victhor@hotmail.com'
}
var cad2 = {
    nome: "toto",
    idade: 2,
    categoria: 'cachorro',
    raca: 'viralata',
    tamanho: 'medio',
    peso: '2kg',
    coleira: '#fff',
    descricao: 'Sei não',
    nome_contato: 'victhor',
    telefone: '85989715291',
    email: 'victhor@hotmail.com'
}
var cad3 = {
    nome: "obelisco",
    idade: 3,
    categoria: 'gato',
    raca: 'puddle',
    tamanho: 'pequeno',
    peso: '2kg',
    coleira: '#fff',
    descricao: 'Sei não',
    nome_contato: 'victhor',
    telefone: '85989715291',
    email: 'victhor@hotmail.com'
}
//localStorage.setItem('0', JSON.stringify(cad1))