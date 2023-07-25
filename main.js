const form = document.forms[0];
const h2 = document.getElementsByTagName("h2")[0];

form.addEventListener("submit", (event) => handleSubmit(event));

function handleSubmit(event) {
  event.preventDefault();
  const num = event.target.elements["input"].value;
  h2.innerText = `The Collatz number of ${num} is ${coll(parseInt(num))}`;
}

function coll(n) {
  return n === 1 ? 0 : n % 2 === 0 ? 1 + coll(n / 2) : 1 + coll(3 * n + 1);
}
