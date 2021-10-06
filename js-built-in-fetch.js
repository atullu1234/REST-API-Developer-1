/*function getMethod() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
}*/

const testp = (document.getElementById("test").innerHTML = getData(
  "https://gorest.co.in/public/v1/users"
).then((data) => data));
return response.json();

//GET
async function getData(url) {
  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
  });
  return response.json();
}

function getMethod() {
  getData("https://gorest.co.in/public/v1/users").then((data) => {
    console.log(data);
  });
}

//POST
async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

function postMethod() {
  postData("https://jsonplaceholder.typicode.com/posts", {
    id: 101,
    petId: 5,
    quantity: 0,
    shipDate: "2021-07-23T01:44:32.945Z",
    status: "placed",
    complete: false,
  }).then((data) => {
    console.log(data);
  });
}

//PUT
async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

function putMethod() {
  postData("https://jsonplaceholder.typicode.com/posts/1", {
    id: 1,
    petId: 5,
    quantity: 0,
    shipDate: "2021-07-23T01:44:32.945Z",
    status: "placed",
    complete: false,
  }).then((data) => {
    console.log(data);
  });
}

//DELETE
async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

function deleteMethod() {
  postData("https://jsonplaceholder.typicode.com/posts/1", {}).then((data) => {
    console.log(data);
  });
}
