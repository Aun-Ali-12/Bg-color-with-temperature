function changeBg() {
  let body = document.getElementById("body");
  let getTempFromInp = document.getElementById("get-temp").value;
  let divOfContent = document.getElementById("temp-input");
  let btn  = document.getElementById("btn")
  console.log(getTempFromInp);
  if (getTempFromInp > 35) {
    body.style.backgroundColor = "red";
    divOfContent.style.backgroundColor = "red";
    btn.style.backgroundColor = "red"
  } else if (getTempFromInp < 10) {
    body.style.backgroundColor = "blue";
    divOfContent.style.backgroundColor = "blue";
    btn.style.backgroundColor = "blue"
  } else {
    body.style.backgroundColor = "rgb(1, 109, 1)";
    divOfContent.style.backgroundColor = "rgb(1, 109, 1)";
    btn.style.backgroundColor = "rgb(1, 109, 1)"
  }
}
