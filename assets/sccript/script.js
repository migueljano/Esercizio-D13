const frmList = document.getElementById('myList');
const insetItem= document.getElementById ('insetItem');
const btnInsert = document.getElementById ('btnInsert');
const myList = document.getElementById ('list');
const listaAggiunta = [];


btnInsert.addEventListener('click', function(e){
    e.preventDefault();
    newList();
}) 

function newList() {
    listaAggiunta.push(insetItem.value);
}


function lista() {
    list.innerHTML = '';
    for(let i = 0; i < lista.length; i++) {
        let nuevaLi = document.createElement ('li');
        nuevaLi.innerHTML = listaAggiunta[i];
        list.appendChild(nuevaLi);
    }

}