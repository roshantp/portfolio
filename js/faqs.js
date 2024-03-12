// FAQs Answer
var tooglevalue = 1;

function showAnswer(){
  let plus = document.getElementById("plus");
  let minus = document.getElementById("minus");
  let ans = document.getElementById("answer");

  if (tooglevalue===1){
    minus.style.display = "block";
    plus.style.display = "none";
    ans.style.display = "flex";
    tooglevalue = 0;
  }
  else{
    minus.style.display = "none";
    plus.style.display = "block";
    ans.style.display = "none";
    tooglevalue = 1;
  }

}