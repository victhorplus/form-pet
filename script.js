var lista_pet = getStorage() || [];
var pet = {};
var contato = {};

function send(){
    pet = {
        nome: document.getElementById('input-pet-nome').value,
        idade: document.getElementById('input-pet-idade').value,
        categoria: document.getElementById('input-pet-categoria').value,
        raca: document.getElementById('input-pet-raca').value,
        tamanho: document.getElementById('input-pet-tamanho').value,
        peso: document.getElementById('input-pet-peso').value,
        coleira: document.getElementById('input-pet-coleira').value,
        descricao: document.getElementById('input-pet-descricao').value,
        imagem: document.getElementById('pet-img').src
    }

    contato = {
        nome: document.forms['form-cadastro']['input-contato-nome'].value,
        telefone: document.forms['form-cadastro']['input-contato-telefone'].value,
        email: document.forms['form-cadastro']['input-contato-email'].value
    }

    if(validaDados())
        popup();
}

function validaDados(){
    if(
        pet.categoria === undefined ||
        pet.tamanho === undefined ||
        pet.coleira === undefined ||
        pet.descricao === undefined ||
        contato.nome === undefined ||
        contato.telefone === undefined ||
        contato.email === undefined
    ){
        erro('Dados de cadastro incompletos');
        return false;
    }
    return true;
}

function popup(){
    var ul_pet = document.createElement('ul');
    var li_pet = []
    for(let att in pet){
        if(pet[att] != ''){
            let li = document.createElement('li')
            li_pet.push(document.createElement('li'))
        }
    }
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