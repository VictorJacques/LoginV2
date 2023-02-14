var user = {
  username: "",
  password: "",
};

let loginButton = document.getElementById("botaoLogin");
let username = document.getElementById("username");
let password = document.getElementById("password");

const handleChangeUsername = (e) => {
  user.username = e.target.value;
  console.log(user);
};
const handleChangePassword = (e) => {
  user.password = e.target.value;
  console.log(user);
};

const clicou = () => {
  if (
    localStorage.getItem("Name") == user.username &&
    localStorage.getItem("Password") == user.password
  ) {
    alert("Logou.");
    location.replace("logOut.html");
  } else {
    alert("Credenciais inválidas ou não existentes!");
  }
};

loginButton.addEventListener("click", clicou);
username.addEventListener("change", handleChangeUsername);
password.addEventListener("change", handleChangePassword);
