// 
/*



*/
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function multiply(num1, num2) {
    var result = num1 * num2;
    return result;
  }
function setUserName() {
    var myName = prompt("Введите свои имя, пожалуйста");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Эта статья про " + "выдру, " + myName;
  }
var trash = multiply(100, 500);


var myImage = document.querySelector("img");
myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/vydra.jpg") {
    myImage.setAttribute("src", "images/2.png");
  } else {
    myImage.setAttribute("src", "images/vydra.jpg");
  }
};
  document.querySelector("h1").onclick = function () {
    alert("Нет никакого смысла кликать куда ни попадя");
  };
  document.querySelector("h2").onclick = function () {
    alert("Я же говорю: нет никакого смысла кликать куда ни попадя");
  };
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Эта статья про " + "выдру, " + storedName;
  }
  myButton.onclick = function () {
    setUserName();
  };