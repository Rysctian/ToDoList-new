const form = document.querySelector('#addform')
const itemInput = document.querySelector('#item')
var ul = document.querySelector("ul");
var li = document.createElement('li')
const msg = document.querySelector(".msg");

form.addEventListener('submit', addItem)

function addItem(e){
  e.preventDefault()
    
  wholeTask();

}

function wholeTask(){
    const task = itemInput.value
    if (!task){
        alert('Invalid Characters')  
    }else{

        // add Item
        var li = document.createElement('li') // create new li
        li.className = 'list-group-item mt-3 ps-20' // create classname for li
        li.appendChild(document.createTextNode(itemInput.value)) // create a variable if you input 
        ul.appendChild(li)
        itemInput.value = ""
    
        li.addEventListener('click', itemDone)
        function itemDone(){
            li.classList.toggle('done')
            // li.innerHTML += ' -done' if you want to add text in an item
        }

        // delete button
        var dltBtn = document.createElement('button') // create button
        dltBtn.appendChild(document.createTextNode('X')) // create what text inside a button
        li.appendChild(dltBtn)  //  put the delete button inside li

        dltBtn.addEventListener('click', removeItem) // create function for delete Button

        function removeItem (){ // calling function to delete li
            li.remove()
        } 

    }
}


























