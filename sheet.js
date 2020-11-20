//Get modal element
var modal = document.getElementById('formModal');
//Get open modal button
var modal = document.getElementById('modalBtn');
//Get close button

//Listen for open click
modalBtn.addEventListener('click', openModal);
//Listen for outside click
window.addEventListener('click', outsideClick);

//Function to open modal
function openModal(){
    modal.style.display = 'block';
}

//Function to close modal if outside click
function outsideClick(e){
    if(e.target == modal){
        modal.style.dispay = 'none'
    }
}