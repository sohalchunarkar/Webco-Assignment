function submitForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  if (name == "" || email == "") {
    alert(" Please enter both name and email.");
  } 
  else {
    var found = false;
    for (var i = 0; i < email.length; i++) {
      if (email[i] == "@") {
        found = true;
        break;
      }
    }

    if (found == false) {
      alert("Error");
    } else {
      alert("Success" );
    }
  }
}