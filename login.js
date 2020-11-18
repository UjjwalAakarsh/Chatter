function Login(){
    var username=document.getElementById("userinput").value;
    localStorage.setItem('user',username);
    window.location="room.html";
}