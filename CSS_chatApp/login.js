const Email = document.getElementById("emailBox");
const Password = document.getElementById("passwordBox");
const button = document.querySelector("button");
const loadData = async () => {
  try {
    const data = await fetch("./database/loginData.json");
    const response = await data.json();

    console.log(response);
    response.forEach((element) => {
      if (Email.value == element.email && Password.value == element.password) {
        alert("Login Success");
        location.href = "./home.html";
      }
      console.log(element);
    });
  } catch (error) {
    alert("Login Failure");
  }
};
button.addEventListener("click", (e) => {
  e.preventDefault();
  loadData();
});
