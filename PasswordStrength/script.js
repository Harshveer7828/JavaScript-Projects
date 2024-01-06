let password=document.querySelector("#password");
let passInfo=document.querySelector("#passInfo");
let status=document.querySelector("#status");

password.addEventListener("input", function (e) {
  const passInfo = document.getElementById("passInfo");

  if (password.value.length > 8) {
    passInfo.classList.remove("hidden");
    passInfo.classList.add("text-orange-500");
    document.querySelector("#status").innerHTML = "medium";

    // Check for special characters in the input field
    if (
      password.value.includes("@") ||
      password.value.includes("#") ||
      password.value.includes("%") ||
      password.value.includes("!") ||
      password.value.includes("*") ||
      password.value.includes("$") ||
      password.value.includes("^")
    ) {
      passInfo.classList.add("text-green-700");
      document.querySelector("#status").innerHTML = "Strong";
    }
    else{
        passInfo.classList.remove("text-green-700");
        passInfo.classList.remove("hidden");
        passInfo.classList.add("text-orange-500");
        document.querySelector("#status").innerHTML = "medium";
    }
  } else if (password.value.length < 8) {
    passInfo.classList.add("hidden");
  }
});
