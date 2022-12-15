document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.querySelector("#user").value;
  const email = document.querySelector("#email").value;
  const city = document.querySelector("#city").value;
  const street = document.querySelector("#street").value;
  let id = 0;
  id++;
  fetch("order.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: [JSON.stringify({
      id,
      name,
      email,
      city,
      street,
    })],
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => console.log(data));
});
