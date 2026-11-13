document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const userName = document.querySelector("#question").value;
  const res = await fetch(`/api?student=${userName}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#random").textContent = data.random
}