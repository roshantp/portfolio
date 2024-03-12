function removePlant(){
    let plant = document.getElementById('ordered-plant-1');

    plant.style.display = "none";
    document.getElementById("sub-total-price").innerHTML="700";
    document.getElementById("total-price").innerHTML="750";
}


function promoCode(){
    let code = document.getElementById('promo-code').value;
    let instruction = document.getElementById('promo-inst');

    if(code==""){
        instruction.innerHTML="Please enter the promo code.";
        instruction.style.color= "red";
    }
    else{
        instruction.innerHTML="Promo code applied.";
        instruction.style.color= "green";
    }

}


function plusQuantity(){
    let quantity = Number(document.getElementById("plant-quantity").innerHTML);

    if(quantity >= 1){
        quantity += 1;
        document.getElementById("plant-quantity").innerHTML = quantity;
    }
}

function minusQuantity(){
    let quantity = Number(document.getElementById("plant-quantity").innerHTML);

    if(quantity > 1){
        quantity -= 1;
        document.getElementById("plant-quantity").innerHTML = quantity;
    }
}



function plusQuantity2(){
    let quantity = Number(document.getElementById("plant-quantity2").innerHTML);

    if(quantity >= 1){
        quantity += 1;
        document.getElementById("plant-quantity2").innerHTML = quantity;
    }
}

function minusQuantity2(){
    let quantity = Number(document.getElementById("plant-quantity2").innerHTML);

    if(quantity > 1){
        quantity -= 1;
        document.getElementById("plant-quantity2").innerHTML = quantity;
    }
}