let btn = document.querySelector("#btn");
let h = document.querySelector(".mode");
let bg = document.querySelector(".background");
let fp1 = document.querySelector(".fp");

console.log(h);

let m = () => {
  if (h.innerText === "Light mode") {
    h.innerText = "Dark Mode";
    fp1.style.backgroundColor = "grey";
    fp1.innerText.style.color = "white";
  } else if (h.innerText === "Dark Mode") {
    h.innerText = "Light mode";
    fp1.style.backgroundColor = "white";
    fp1.innerText.style.color = "black";
  }
};

let curMode = "light";

btn.addEventListener("click", () => {
  //   console.log((event.target.value = ""));
  m();
  //   console.log("button Clicked");

  if (curMode === "light") {
    curMode = "dark";

    // document.querySelector("body").style.backgroundColor = "black";
  } else {
    curMode = "light";

    // document.querySelector("body").style.backgroundColor = "white";
  }
  console.log(curMode);
});
