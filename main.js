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


let lis = [...document.querySelectorAll('.remove')];


for (const li of lis) {
  li.addEventListener('click', function() {
      var div = this.parentElement;
      div.remove();
    this.parentNode.removeChild(this);
  })
}

let testlist = [...document.querySelectorAll('li')];

for (const li of testlist) {
  li.addEventListener('click', function() {
      this.classList.toggle("underline");
  })
}


function addlist(){
  var listadd = document.getElementById("myInput").value;
  var calllist = document.createElement("li");                
  var text = document.createTextNode(`${listadd}`);  
  if (listadd == ''){
    document.getElementById("errorbox").style.display = "block"
    document.getElementById("close").innerHTML ="Please insert on To Do box"
    return false
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

 span.addEventListener('click', function() {
      var div = this.parentElement;
      div.remove();
    this.parentNode.removeChild(this);
  })


calllist.addEventListener('click', function() {
      this.classList.toggle("underline");
  })



}

function closeDoor(){
  document.getElementById("errorbox").style.display = "none";
}