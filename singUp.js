var user = {
  username: "",
  password: "",
};

let loginButton = document.getElementById("botaoLogin");
let username = document.getElementById("username");
let password = document.getElementById("password");
let passwordM = document.getElementById("passwordMatch");

const handleChangeUsername = (e) => {
  user.username = e.target.value;
  console.log(user);
};
const handleChangePassword = (e) => {
  user.password = e.target.value;
  console.log(user);
};
const handleChangePasswordM = (e) => {
  passwordM = e.target.value;
  console.log(passwordM);
};

const clicou = () => {
  if (passwordM == user.password) {
    localStorage.setItem("Name", user.username);
    localStorage.setItem("Password", user.password);
    alert("Cadastro feito com sucesso!");
    location.replace("index.html");
  } else {
    alert("As senhas devem ser iguais!");
  }
};

loginButton.addEventListener("click", clicou);
username.addEventListener("change", handleChangeUsername);
password.addEventListener("change", handleChangePassword);
passwordM.addEventListener("change", handleChangePasswordM);

/* if (passwordM == password) {
  localStorage.setItem("Name", user.username);
  localStorage.setItem("Password", user.password);
} else {
  alert("As senhas devem ser iguais!");
} */
