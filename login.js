function onLogin(){
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var ada_at = false
    var ada_titik = false


    if (!user){
        alert("email tidak boleh kosong")
        return false
    }else if (user.length < 5){
        alert("email harus lebih dari 6 huruf")
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
        alert("anda lupa @")
        return false
    }else if (!ada_titik){
        alert("email kurang titik")
        return false
    }
    
    if(!pass){
        alert("password tidak boleh kosong")
        return false
    }else if (pass.length < 6){
        alert("password harus lebih dari 6")
        return false
    }
    
    return location.href = "main.html"
}