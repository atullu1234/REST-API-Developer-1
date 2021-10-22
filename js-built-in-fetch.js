/* GET method */
fetch("https://pokeapi.co/api/v2/pokemon/?limit=7&offset=24")
  .then((response) => response.json())
  .then(
    (json) => (document.getElementById("get").innerHTML = JSON.stringify(json))
  );

/* POST method */
function testP() {
  postData("https://jsonplaceholder.typicode.com/posts", post);
}

var post = {
  title: "foo",
  body: "bar",
  userId: 1,
};

function postData(url, post) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(post),
  })
    .then((response) => response.json())
    .then(
      (json) =>
        (document.getElementById("post").innerHTML = JSON.stringify(json))
    );
}

/* PUT method */
function testPut() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "bar",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then(
      (json) =>
        (document.getElementById("put").innerHTML = JSON.stringify(json))
    );
}

/* DELETE method */
function testDelete() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then(
      (json) =>
        (document.getElementById("delete").innerHTML = JSON.stringify(json))
    );
}
