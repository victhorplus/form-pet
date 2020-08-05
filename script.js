function preview(){
    var file = document.getElementById('pet-img').files[0];
    var img = document.getElementById('img');
    var reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = ()=>{
        img.src = reader.result
    }
}

function clickFile(){
    var fileInput = document.getElementById('pet-img')
    fileInput.click()
}