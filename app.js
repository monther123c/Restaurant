// var id =1;
// const allmenu=[];
// function foodConst (id,name,type,price){
//   this.id= id;
//   this.name=name;
//   this.type=type;
//   this.price=price;

//     };
//     foodConst.prototype.printMenu = function () {
//         const tablEL=document.getElementById('table');
//         const trEL=document.getElementById('tr');
//         tablEL.appendChild('trEl');
//         const thEl= document.getElementsByClassName('th');
//         trEL.appendChild('thEl');

//         for (let i = 0; i < this.id; i++) {
//             let tdEl = document.createElement('td');
//             thEl.appendChild(tdEl);
//             tdEl.textContent = this.id++;
//             tdEl.textContent = this.name;
//             tdEl.textContent = this.type;
//             tdEl.textContent = this.price;

//         }


//     }





//     let form = document.getElementById("form");
//     form.addEventListener("submit", handleSubmit);
//     function handleSubmit(event) {
//         event.preventDefault();
//         let name = event.target.foodname.value;
//         let type =event.target.type.value; 
//         let price = event.target.Price.value;

//         console.log(id, name, type, price);
//         const newItem = new Drink(id, name, type, price);
//         newItem.printMenu();

       
    
       
//     }
//     for (let i = 0; i < allmenu.length; i++) {
//         allmenu[i].printMenu();
//     }
let form= document.getElementById('form');
let submit=document.getElementById('submit');
let table= document.getElementById('table');
var id =0;
function foodConst (id,name,type,price){
    this.id=id;
    this.name = name;
    this.type = type;
    this.price = price;
    this.render();
}
foodConst.prototype.render=function(){
    let tRow =document.createElement('tr');
    table.appendChild(tRow);
    let IDs= document.createElement('td');
    IDs.textContent = this.id;
    tRow.appendChild(IDs);
    let newName = document.createElement('td');
    newName.textContent = this.name;
    tRow.appendChild(newName);  
    let newType = document.createElement('td');
    newType.textContent = this.type;
    tRow.appendChild(newType);
    let newPrice = document.createElement('td');
    newPrice.textContent = this.price;
    tRow.appendChild(newPrice);
    tRow.classList.add('row');

}
foodConst.id;
form.addEventListener('submit',handleSubmit);
    function handleSubmit(event){
        event.preventDefault();
        let name = event.target.name.value;
        let type = event.target.type.value;
        let price = event.target.price.value;
        let id = uniqueId();
        const newFood = new foodConst(id,name,type,price);
    }


function uniqueId(){
    val = Math.floor(1000 + Math.random() * 9000);
    return val;
}