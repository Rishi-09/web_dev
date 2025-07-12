const button = document.querySelector(".button");

button.addEventListener("click", () => {
  const res = heckTheSystem();
  button.disabled = true;
  button.textContent = "Working...";
  console.log("Button clicked, starting the system check...");
});

let str1 = "initializing database connection.";
const res1 = "database connection established!";
let str2 = "reading core files.";
const res2 = " all core files read!";
let str3 = "checking system integrity.";
const res3 = " system integrity checked!";
let str4 = "loading system modules.";
const res4 = "system modules loaded!";
let str5 = "sending data to server.";
const res5 = "data sent to server!";

const getDots = (id, str, result) => {
  const copy = str;
  const stopLen = str.length + 2;
  const myInterval = setInterval(() => {
    document.querySelector(`#${id}`).innerText = str;
    str += ".";
    if (str.length > stopLen) {
      str = copy;
    }
  }, 500);
  setTimeout(() => {
    document.querySelector(`#${id}`).innerText = `${result}`;
    console.log("interval");
    clearInterval(myInterval);
  }, (Math.floor(Math.random() * (5 - 2 + 1)) + 2) * 1000);
};

function heckTheSystem() {
  setTimeout(() => {
    getDots("firstMsg", str1, res1);
  }, 1000);

  setTimeout(() => {
    getDots("secondMsg", str2, res2);
  }, 3000);

  setTimeout(() => {
    getDots("thirdMsg", str3, res3);
  }, 5000);

  setTimeout(() => {
    getDots("fourthMsg", str4, res4);
  }, 7000);

  setTimeout(() => {
    getDots("fifthMsg", str5, res5);
    setTimeout(() => {
      document.querySelector("#finalMsg").innerText = "System hecked!";
    }, 5000);
  }, 9000);

  return 1;
}
