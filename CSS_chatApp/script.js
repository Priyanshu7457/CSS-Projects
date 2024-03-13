const chatBox = document.querySelector(".chatBox");
const personList = document.querySelector(".personList");
let Status;
const dataFetching = () => {
  fetch("database/personList.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((person) => {
        const personDiv = document.createElement("div");
        personDiv.classList.add("person");
        const img = document.createElement("img");
        img.src = person.img;
        img.alt = "profileImage";
        img.width = 40;
        img.height = 40;
        Status = person.status;
        const nameParagraph = document.createElement("p");
        let status = document.createElement("p");
        status.textContent = person.status;
        status.style.display = "none";
        nameParagraph.textContent = person.name;
        nameParagraph.style.width = "100%";
        nameParagraph.style.height = "100%";

        personDiv.appendChild(img);
        personDiv.appendChild(nameParagraph);
        personDiv.appendChild(status);

        personList.appendChild(personDiv);
      });
    })
    .catch((error) => {
      alert("Error fetching data:", error);
    });
};

dataFetching();

personList.addEventListener("click", (e) => {
  Array.from(personList.children).forEach((child) => {
    child.classList.remove("active");
  });
  const a = e.target.parentElement;

  if (a.classList.contains("person")) {
    a.classList.add("active");
    chatBox.innerHTML = `
      <div class="topBar">
      <div class="userDetail">
     <img
          src="${a.firstElementChild.getAttribute("src")}"
          alt="profileImage"
          height="50"
          width="50"
        />
        <div class='midBox'>
        <p>${a.children[1].innerText}</p> <br/>
        <p>${a.lastElementChild.innerText}</p>
        </div>
        <div class="icons">
          <i class="fa-solid fa-user-plus"></i>
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
    </div>
    <div class="messageBox"></div>
    <div class="inputBox">
      <input type="text" name="" id="" placeholder="Enter Message Here" />
      <button type="button">Send</button>
    </div>`;
  }
});
