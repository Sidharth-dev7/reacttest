function showAlert(event) {
    event.preventDefault();  
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    alert("Username: " + username + "\nEmail: " + email + "\nAddress: " + address);
}