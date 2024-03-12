// Plants Page Load More
var toogleload = 1;

function loadMorePlants(){
  
  let x = document.getElementById("load-more-desktop");

  let y = document.getElementById("load-more-mobile");

  if (toogleload == 1){
    x.style.display = "block";
    y.style.display = "block";
    document.getElementById("show-more").innerHTML="SHOW LESS";
    document.getElementById("show-more-mobile").innerHTML="SHOW LESS";
    toogleload = 0;
  }
  else{
    x.style.display = "none";
    y.style.display = "none";
    document.getElementById("show-more").innerHTML="SHOW MORE";
    document.getElementById("show-more-mobile").innerHTML="SHOW MORE";
    toogleload = 1;
  }

}