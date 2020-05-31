// add items
const form = document.getElementById('addForm');
const itemList = document.getElementById('items');

form.addEventListener('submit', addItem);

// remove item
itemList.addEventListener('click', removeItem);


// filter item
const filter = document.getElementById('filter');

filter.addEventListener('keyup', filterItem);



function addItem(e){
    e.preventDefault();

    let list = localStorage.getItem("list");
    list = list + "," + document.getElementById("item").value;
    localStorage.setItem('list', list);

    const newItem = document.getElementById('item').value;
    appendElement(newItem);

    // //create an element
    // const li = document.createElement('li');
    // li.className = "list-group-item";
    // const liText = document.createTextNode(newItem)
    // li.appendChild(liText);
    // itemList.appendChild(li);

    // // create btn-delete
    // const buttonDel = document.createElement('button');
    // buttonDel.className = "btn btn-danger btn-sm float-right delete";
    // buttonDel.appendChild(document.createTextNode('X'));
    // li.appendChild(buttonDel);
}

function appendElement(val){
    const li = document.createElement('li');
    li.className = "list-group-item";
    const liText = document.createTextNode(val)
    li.appendChild(liText);
    itemList.appendChild(li);

    // create btn-delete
    const buttonDel = document.createElement('button');
    buttonDel.className = "btn btn-danger btn-sm float-right delete";
    buttonDel.appendChild(document.createTextNode('X'));
    li.appendChild(buttonDel);

}

window.onload = fff();


function fff(){
    let list = localStorage.getItem("list").split(",");
    for(let i = 0; i< list.length; i++){
        appendElement(list[i]);
    }
    
}

// remove item 
// localStorage.clear(); -daca vrea sa sterg tot continutul din localStorage

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure ?')){
            const item = e.target.parentElement;
            itemList.removeChild(item);
            removeItemLocalS(e);
            //localStorage.removeItem(item);
        }
    }
}

function removeItemLocalS(){
    let list = localStorage.getItem('list').split(",");
    for(let i = 0; i< list.length; i++){
        localStorage.removeItem(list[i]);
    }
    return list;      
     
}

function filterItem (elem){
    const text = elem.target.value.toLowerCase();
    const items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function (sss){
        const arrList = sss.firstChild.textContent;
        if(arrList.toLowerCase().indexOf(text) != -1){
            sss.style.display = "block";
        } else {
            sss.style.display ="none";
        }
    })
}