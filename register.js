function onRegister(){
    let first_name= document.getElementById("Fname").value
    let last_name= document.getElementById("Lname").value
    var user = document.getElementById("Username").value;
    var pass = document.getElementById("Password").value;
    var ada_at = false
    var ada_titik = false

    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    
    if (!first_name){
        alert("nama depan tidak boleh kosong")
         return false
    }
    
    if(first_name.match(format)){
        alert("nama depan harus huruf")
        return false
    }else if(last_name.match(format)){
        alert("nama akhir harus huruf")
        return false
    }

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