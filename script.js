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
        nome: document.getElementById('input-contato-nome').value,
        telefone: document.getElementById('input-contato-telefone').value,
        email: document.getElementById('input-contato-email').value
    }

    if(validaDados()){
        popup();
        clearForm();
    }
	
	document.getElementById("foto").style.border = "5px solid " + pet.coleira;
}

function validaDados(){
    if(pet.nome == '' || pet.descricao == '' || contato.nome == '' || contato.email == '' || contato.telefone == ''){

        erro('Dados de cadastro incompletos');
        return false;
    }
	
	else {
    return true;
	}
}

function popup(){
    var ul_pet = document.createElement('ul');
    var ul_contato = document.createElement('ul');
    var li_pet = []
    var li_contato = []

    // Laço para preenchimento dos dados de cadastro do PET no popup
    for(let att in pet){
        // Cria LI com propriedades que contém valor e ignora o resto
        if(pet[att] != '' && att !='imagem'){
            // Formatando para <label class='prop'>Propriedade: </label> <span>valor</span>
            let str = att[0].toUpperCase() + att.slice(1) + ': ';
            let label = document.createElement('label');
            label.innerHTML = str;
            label.className = 'prop';
            let span = document.createElement('span');
            span.innerHTML = pet[att];
            let li = document.createElement('li');
            li.appendChild(label);
            li.appendChild(span);
            li_pet.push(li);
        }
    }
    for(let li of li_pet){
        ul_pet.appendChild(li);
    }
    
    // Laço para preenchimento dos dados de cadastro do CONTATO no popup
    for(let att in contato){
        // Cria LI com propriedades que contém valor e ignora o resto
        if(contato[att] != ''){
            // Formatando para <label class='prop'>Propriedade: </label> <span>valor</span>
            let str = att[0].toUpperCase() + att.slice(1) + ': ';
            let label = document.createElement('label');
            label.innerHTML = str;
            label.className = 'prop';
            let span = document.createElement('span');
            span.innerHTML = contato[att];
            let li = document.createElement('li');
            li.appendChild(label);
            li.appendChild(span);
            li_contato.push(li);
        }
    }
    for(li of li_contato){
        ul_contato.appendChild(li);
    }

    // Adiciona as ULs criadas nas respectivas DIVs
    document.getElementById('img-pet').src = pet.imagem
    document.getElementsByClassName('info-pet-body')[0].appendChild(ul_pet)
    document.getElementsByClassName('info-contato')[0].appendChild(ul_contato)
    openClose();
    return;
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
        img.src = reader.result;
    }
}

function openClose(){
    var popup = document.getElementById('popup');
    if(popup.className == 'hidden'){
        popup.className = 'show';
        return;
    }
    popup.className = 'hidden';
    clearPopup();
}

function clickFile(){
    var fileInput = document.getElementById('input-pet-image')
    fileInput.click()
}

function clearForm(){
    document.getElementById('input-pet-nome').value = ''
    document.getElementById('input-pet-idade').value = ''
    document.getElementById('input-pet-raca').value = ''
    document.getElementById('input-pet-peso').value = ''
    document.getElementById('input-pet-descricao').value = ''
    document.forms['form-cadastro']['input-contato-nome'].value = ''
    document.forms['form-cadastro']['input-contato-telefone'].value = ''
    document.forms['form-cadastro']['input-contato-email'].value = ''
    document.getElementById('input-pet-categoria').selectIndex = 0;
    document.getElementById('input-pet-tamanho').selectIndex = 0;
    document.getElementById('input-pet-image').files[0] = null
    document.getElementById('pet-img').src='img/img-default.png';
}

function clearPopup(){
    document.getElementById('img-pet').src = '';
    document.getElementsByClassName('info-pet-body')[0].innerHTML = '';
    document.getElementsByClassName('info-contato')[0].innerHTML = '';
}

//MÁSCARA TELEFONE

function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('input-contato-telefone').onkeypress = function(){
		mascara( this, mtel );
	}
}