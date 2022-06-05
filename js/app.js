document.querySelector("#text").addEventListener("focusout", myText);
document.querySelector("#password").addEventListener("focusout", myPass);
document.querySelector("#username").addEventListener("focus", myUsername);
document.querySelector("#gmail").addEventListener("focus", myGmail);

document.querySelector("#btn").addEventListener("click", function () {
  myText();
  myPass();
  myUsername();
  myGmail();
});

function myText() {
  let message, text;
  let errElement = document.getElementById("text");
  message = document.getElementById("err");
  text = document.getElementById("text").value;

  try {
    if (text == "") {
      errElement.classList.remove("valid");
      errElement.classList.add("err");
      throw "kiritng!";
    }
    if (text.length > 0) {
      errElement.classList.remove("err");
      errElement.classList.add("valid");
      message.innerHTML = "";
    }
  } catch (e) {
    message.innerHTML = "Ismingizni " + e;
  }
}

function myUsername() {
  let message, username;
  let errElement = document.getElementById("username");
  message = document.getElementById("err3");
  username = document.getElementById("username").value;

  try {
    if (username == "") {
      errElement.classList.remove("valid");
      errElement.classList.add("err");
      throw "kiritng!";
    }
    if (username.length > 0) {
      errElement.classList.remove("err");
      errElement.classList.add("valid");
      message.innerHTML = "";
    }
  } catch (e) {
    message.innerHTML = "Username " + e;
  }
}

function myGmail() {
  let message, gmail;
  let errElement = document.getElementById("gmail");
  message = document.getElementById("err4");
  gmail = document.getElementById("gmail").value;

  try {
    if (gmail == "") {
      errElement.classList.remove("valid");
      errElement.classList.add("err");
      throw "kiritng!";
    }
    if (gmail.length > 0) {
      errElement.classList.remove("err");
      errElement.classList.add("valid");
      message.innerHTML = "";
    }
  } catch (e) {
    message.innerHTML = "Elektron pochta " + e;
  }
}

function myPass() {
  let message, pass;
  let errElement = document.getElementById("password");
  message = document.getElementById("err2");
  pass = document.getElementById("password").value;

  try {
    if (pass == "") {
      errElement.classList.remove("valid");
      errElement.classList.add("err");
      throw "kiritilmadi yoki xato!";
    }
    if (pass.length < 8) {
      errElement.classList.remove("valid");
      errElement.classList.add("err");
      throw "8 ta belgidan ko'p bo'lish kerak!";
    }
    if (pass.length > 0) {
      errElement.classList.remove("err");
      errElement.classList.add("valid");
      message.innerHTML = "";
    }
  } catch (e) {
    message.innerHTML = "Parol " + e;
  }
}
