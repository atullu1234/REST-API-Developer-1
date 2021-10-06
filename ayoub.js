fetch("https://swapi.dev/api")
  .then((res) => {
    if (res.ok) {
      console.log("SUCCESS");
    } else {
      console.log("Not Sucessful");
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("ERROR");
  });
/*  
function request() {
  fetch("https://reqres.in/api/users")
    .then(function (response) {
      return response.json();
    })
    .then((response) => {
      console.log(response);
    });
}
 */
