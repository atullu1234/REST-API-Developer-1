/*function getMethod() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
}*/

//GET
async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

function getMethod() {
  postData("https://jsonplaceholder.typicode.com/posts/1", {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  }).then((data) => {
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
