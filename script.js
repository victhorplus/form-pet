function preview(){
    var file = document.getElementById('input-pet-image').files[0];
    var img = document.getElementById('pet-img');
    var reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = ()=>{
        img.src = reader.result
    }
}

function clickFile(){
    var fileInput = document.getElementById('input-pet-image')
    fileInput.click()
}