var mylist = document.getElementsByTagName("li");

for (var i = 0; i < mylist.length; i++) {
  var span = document.createElement("span");
  var image = document.createElement("img");
  image.src = "./img/trash.png";
  image.style.height = '24px';
  image.style.width = '24px';
  span.className = "remove";
  span.appendChild(image);
  mylist[i].appendChild(span);
}


var removecontentlist = document.getElementsByClassName("remove");

for (var i = 0; i < removecontentlist.length; i++) {
  removecontentlist[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//Add a "checked" symbl when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function(ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("underline");
    }
  },
  false
);



function addlist(){
  var listadd = document.getElementById("myInput").value;
  var calllist = document.createElement("li");                
  var text = document.createTextNode(`${listadd}`);  
  if (listadd == ''){
    alert("Please insert on To Do box")
//      document.getElementsByClassName("welcome-title").value = "please insert on To Do Box"
  }else{
    calllist.appendChild(text);                              
  document.getElementById("list").appendChild(calllist);    
  }
 document.getElementById("myInput").value = ''  

 var span = document.createElement("span");
 var image = document.createElement("img");
 image.src = "./img/trash.png";
 image.style.height = '24px';
 image.style.width = '24px';
 span.className = "remove";
 span.appendChild(image);
 calllist.appendChild(span);

// for (var i = 0; i < removecontentlist.length; i++) {
//  removecontentlist[i].onclick = function() {
//    var div = this.parentElement;
//    div.style.display = "none";
//  }
//}

}
