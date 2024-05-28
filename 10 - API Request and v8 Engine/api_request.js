const requestURL = "https://api.github.com/users/anandacdr";

const xhr = new XMLHttpRequest();

xhr.open("GET", requestURL);
xhr.onreadystatechange = function () {
  // console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    // console.log(data);
    // console.log(typeof data);
    // console.log(data.followers);

    // Assignment: Photo -> When we click on photo, it will give total followers

    const picture = document.getElementById("profile");

    let intervalId;

    // setInterval(function (){
    //     picture.innerHTML = "Clicked"
    // })

    const clickPicture = function () {
      if (!intervalId) {
        console.log("Clicked on Profile Picture");
        picture.innerHTML = `<strong><i>Total Followers of Ananda : ${data.followers}</strong></i>`;
      }
    };

    document.querySelector("#picture").addEventListener("click", clickPicture);
  }

};
// console.log("API")

xhr.send();

// stop

// const stopPicture = function () {
//     if (intervalId) {
//         clearInterval(intervalId)
//         intervalId = null;
//     }
// };

// document.querySelector('#stop').addEventListener('click', stopPicture)
