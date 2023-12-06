const myImage = document.querySelector("img"); // Changes the image on the website on click

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src"); //checks if the src value is equal to the path of original image
    if (mySrc === "images/elhermano.jpg") {
        myImage.setAttribute("src", "images/vegeta.jpg");
    }
    else {
        myImage.setAttribute("src", "images/elhermano.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    }
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Welcome, ${myName}`;
    }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome, ${storedName}`;
  }
  
  myButton.onclick = () => {
    setUserName();
  };