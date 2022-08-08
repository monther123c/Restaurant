var id =1;
const allmenu=[];
function foodConst (id,name,type,price){
  this.id= id;
  this.name=name;
  this.type=type;
  this.price=price;

    };
    foodConst.prototype.printMenu = function () {
        const tablEL=document.getElementById('table');
        const trEL=document.getElementById('tr');
        tablEL.appendChild('trEl');
        const thEl= document.getElementsByClassName('th');
        trEL.appendChild('thEl');

        for (let i = 0; i < this.id; i++) {
            let tdEl = document.createElement('td');
            thEl.appendChild(tdEl);
            tdEl.textContent = this.id++;
            tdEl.textContent = this.name;
            tdEl.textContent = this.type;
            tdEl.textContent = this.price;

        }


    }





    let form = document.getElementById("form");
    form.addEventListener("submit", handleSubmit);
    function handleSubmit(event) {
        event.preventDefault();
        let name = event.target.foodname.value;
        let type =event.target.type.value; 
        let price = event.target.Price.value;

        console.log(id, name, type, price);
        const newItem = new Drink(id, name, type, price);
        newItem.printMenu();

       
    
       
    }
    for (let i = 0; i < allmenu.length; i++) {
        allmenu[i].printMenu();
    }