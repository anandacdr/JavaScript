const sayAnanda = function(){
    console.log("Ananda");
}
const changeText = function(){
    document.querySelector('h1').innerHTML = "best JS series"
}

const changeMe = setTimeout(changeText, 2000)

document.querySelector('#stop').addEventListener('click', function(){
    clearTimeout(changeMe)
    console.log("STOPPED")
})