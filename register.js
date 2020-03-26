function onRegister(){
    let first_name= document.getElementById("Fname").value
    let last_name= document.getElementById("Lname").value
    var user = document.getElementById("Username").value;
    var pass = document.getElementById("Password").value;
    var ada_at = false
    var ada_titik = false

    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    
    if (!first_name){
    document.getElementById("errorbox").style.display = "block"
    document.getElementById("close").innerHTML = "nama depan tidak boleh kosong"
         return false
    }
    
    if(first_name.match(format)){
    document.getElementById("errorbox").style.display = "block"
    document.getElementById("close").innerHTML = "nama depan harus huruf"
        return false
    }else if(last_name.match(format)){
    document.getElementById("errorbox").style.display = "block"
    document.getElementById("close").innerHTML = "nama akhir harus huruf"
        return false
    }

    if (!user){
    document.getElementById("errorbox").style.display = "block"
    document.getElementById("close").innerHTML = "email tidak boleh kosong"
        return false
    }else if (user.length < 5){
     document.getElementById("errorbox").style.display = "block"
    document.getElementById("close").innerHTML = "email harus lebih dari 6 huruf"
        return false
    }
    
    
    for (let i=0;i<user.length;i++){
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