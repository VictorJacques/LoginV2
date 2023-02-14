let logoutButton = document.getElementById("logout");
let usernameInput = document.getElementById("nome");
let emailInput = document.getElementById("email");
let profileUrlInput = document.getElementById("profilePicLink");
let saveBtn = document.getElementById("salvar");

////////////////////////////////////////////

const handleChangeUsername = (e) => {
  username = e.target.value;
  console.log(username);
};

const handleChangeEmail = (e) => {
  email = e.target.value;
  console.log(email);
};

const handleChangeProfilePic = (e) => {
  profileUrl = e.target.value;
  console.log(profileUrl);
};

///////////////////////////////////////////

const clicouLogout = () => {
  location.replace("index.html");
};

const clicouSalvar = () => {
  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("picture", profileUrl);
  document.getElementById("welcome").innerHTML = `Olá ${localStorage.getItem(
    "username"
  )}`;
};

///////////////////////////////////////////

logoutButton.addEventListener("click", clicouLogout);
saveBtn.addEventListener("click", clicouSalvar);
usernameInput.addEventListener("change", handleChangeUsername);
emailInput.addEventListener("change", handleChangeEmail);
profileUrlInput.addEventListener("change", handleChangeProfilePic);

////////////////////////////////////////////
