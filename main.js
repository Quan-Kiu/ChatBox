let circle = document.getElementsByClassName("circle");

const autocircle = () => {
  rd = Math.floor(Math.random() * 2);
  x = Math.floor(Math.random() * window.outerWidth);
  y = Math.floor(Math.random() * window.outerHeight);

  circle[rd].style.left = "" + x + "px";
  circle[rd].style.top = "" + y + "px";
};

setInterval(autocircle, 1000);

function action(string) {
  let button = document.getElementById("btn");
  let sub_Login = document.getElementById("sub-login");
  let logins = document.querySelectorAll(".login div");
  let auth = document.getElementsByClassName("auth");
  if (string == "login") {
    sub_Login.style.display = "block";
    logins[2].style.display = "none";
    logins[0].style.display = "block";
    logins[1].style.display = "block";
    button.innerHTML = "Login";
    auth[1].innerHTML = "Sign Up";
    auth[1].setAttribute("onclick", "action('sign')");
  } else if (string == "sign") {
    auth[1].innerHTML = "Login";
    auth[1].setAttribute("onclick", "action('login')");
    button.innerHTML = "Sign Up";
    logins[2].style.display = "block";
  } else {
    logins[0].style.display = "none";
    logins[1].style.display = "none";
    logins[2].style.display = "block";
    button.innerHTML = "Forgot Password";
    auth[1].innerHTML = "Login";
    auth[1].setAttribute("onclick", "action('login')");
  }
}
