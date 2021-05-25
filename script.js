const addbtn = document.querySelector('.addbtn');
let input = document.querySelector('.input');
let container = document.getElementById('listCnt');
 class item{
     constructor(itemName){
        this.createDiv(itemName);  
     }

     createDiv(itemName){
         let input = document.createElement('input');
         input.value = itemName;
         input.disabled =  true;
         input.classList.add('item-input');
         input.classList.add('form-control');
         input.classList.add('bg-light')
         input.type = 'text';

         let itemBox = document.createElement('div');
         itemBox.classList.add('item');
         itemBox.classList.add('input-group')
        

         let editBtn = document.createElement('button');
         editBtn.innerText = 'Edit'
         editBtn.classList.add('btn');
         editBtn.classList.add('btn-success');

         let removeBtn= document.createElement('button');
         removeBtn.innerText = 'REMOVE'
         removeBtn.classList.add('btn');
         removeBtn.classList.add('btn-danger');

         container.appendChild(itemBox);

         itemBox.appendChild(input);
         itemBox.appendChild(editBtn);
         itemBox.appendChild(removeBtn);

        editBtn.addEventListener('click', () => this.edit(input));

        removeBtn.addEventListener('click', () => this.remove(itemBox));
     }

     edit(input){
         input.disabled = !input.disabled
     }

     remove(item){
         container.removeChild(item);
     }
 }

 function check(){
     if(input.value != ""){
         new item(input.value);
         input.value = "";
     }
 }
 addbtn.addEventListener('click', check)
