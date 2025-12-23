fetch("https://api.github.com/users/torvalds")
  // fetch("https://google.com")
  .then((v) => v.json())
  .then((v) => console.log(v))
  .catch((e) => console.log(e));
