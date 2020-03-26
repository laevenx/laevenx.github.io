function onLogin(){
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var ada_at = false
    var ada_titik = false


    if (!user){
         document.getElementById("errorbox").style.display = "block"
            document.getElementById("close").innerHTML = "email tidak boleh kosong"

        return false
    }else if (user.length < 5){
        document.getElementById("errorbox").style.display = "block"
         document.getElementById("close").innerHTML = "email harus lebih dari 6 huruf"

        return false
    }
    
    
    for (var i=0;i<user.length;i++){
        if(user[i] == '@'){
            ada_at = true
        }
        if(user[i] == "."){
            ada_titik=true
        }
    }
    
    if (!ada_at){
         document.getElementById("errorbox").style.display = "block"
            document.getElementById("close").innerHTML = "anda lupa @"

        return false
    }else if (!ada_titik){
            document.getElementById("errorbox").style.display = "block"
            document.getElementById("close").innerHTML = "email kurang titik"
        return false
    }
    
    if(!pass){
         document.getElementById("errorbox").style.display = "block"
            document.getElementById("close").innerHTML ="password tidak boleh kosong"
        return false
    }else if (pass.length < 6){
        document.getElementById("errorbox").style.display = "block"
            document.getElementById("close").innerHTML ="password harus lebih dari 6"
        return false
    }
    
    return location.href = "main.html"
}

function closeDoor(){
    document.getElementById("errorbox").style.display = "none";
}

//var c=0
//function pop(){
//    if (c ==0){
//        document.getElementById("errorbox").style.display - "block"
//        c=1;
//    }else {
//        document.getElementById("errorbox").style.display - "none"
//        c=0;
//    }
//}
