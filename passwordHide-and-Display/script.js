let password = document.querySelector(".passClose");
let passSeen = document.querySelector(".passSeen");
let passsInput = document.querySelector("#passwordInput");

function seenPassword() {
  if (passsInput.type == "password") {
    passsInput.type = "text";
    passSeen.style.display = "initial";
    password.style.display = "none";
  } else {
    passsInput.type = "password";
    passSeen.style.display = "none";
    password.style.display = "initial";
    }
}
