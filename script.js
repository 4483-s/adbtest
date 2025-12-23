document.cookie = "coo=aa";

fetch("https://google.com")
  .then((v) => console.log(v.ok))
  .catch((e) => console.log(e));
