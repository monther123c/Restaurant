let table= document.getElementById('table');
let oob=[];
let DaArr=[];



function render (){
    for (let i =0;i<oob.length;i++){
        let j=oob[i];

  
    let tRow =document.createElement('tr');
    table.appendChild(tRow);
    let IDs= document.createElement('td');
    IDs.textContent = j.id;
    tRow.appendChild(IDs);
    let newName = document.createElement('td');
    newName.textContent = j.name;
    tRow.appendChild(newName);  
    let newType = document.createElement('td');
    newType.textContent = j.type;
    tRow.appendChild(newType);
    let newPrice = document.createElement('td');
    newPrice.textContent = j.price;
    tRow.appendChild(newPrice);
    console.log(oob[i].type);
    }
}
function getData (){
    let ReData= localStorage.getItem("food");
    DaArr=JSON.parse(ReData);
    return DaArr ;
}
oob=getData();
render();
