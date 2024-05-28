// fetch("https://www.github.com/anandacdr").then().catch().finally()

const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB Calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise Consumed.");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 Resolved.");
});

// another,
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "anandacdr", email: "info@anandachaudhary@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Ananda", password: "1234" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(() => console.log("The Promise is either resolved or rejected."));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;

    if (!error) {
      resolve({ username: "ananda.cdr", password: "1234" });
    } else {
      reject("ERROR: Went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://api.github.com/users/anandacdr");
//     const data = await response.json();

//     console.log(data);
//   } catch (err) {
//     console.log("E: ", err);
//   }
// }

// getAllUsers();

// another method

fetch("https://api.github.com/users/anandacdr")
  .then((response) => {
    return response.json();
  })
  .catch((err) => console.log(err))
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
