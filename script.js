const form = document.querySelector('#addform')
const itemInput = document.querySelector('#item')
var ul = document.querySelector("ul");
var li = document.createElement('li')
const msg = document.querySelector(".msg");

document.getElementsByClassName

form.addEventListener('submit', e => {
	e.preventDefault();
	
    wholeTask();
});

function wholeTask(){
    const task = itemInput.value
    if (!task){
        checkInputs()

    }else{

        // add Item
        var li = document.createElement('li') // create new li
        li.className = 'item-list' // create classname for li
        itemValue = document.createTextNode(itemInput.value) // create a variable if you input 
        li.appendChild(itemValue)
        
        ul.appendChild(li)
        itemInput.value = ""
        
        // done button
        var doneBtn = document.createElement('button')
        var checkBtn = document.createElement('i')
        checkBtn.className = 'fa-solid fa-check'
        doneBtn.appendChild(checkBtn)
        li.appendChild(doneBtn)
        
        
        checkBtn.addEventListener('click', e =>{
            li.classList.toggle('done')
        } )
     

        // delete button
        var dltBtn = document.createElement('button')
        var trashBtn = document.createElement('i') // create button
        trashBtn.className = 'fa-solid fa-trash' // create what text inside a button
        dltBtn.appendChild(trashBtn)
        li.appendChild(dltBtn)

        dltBtn.addEventListener('click', e =>{
            li.remove()
        } ) // create function for delete Button

        
                
        // function removeItem (){ // calling function to delete li
            
        // } 

    }
}

function checkInputs(){
    const error = document.getElementById('error')

    error.className = ""
}
























