// document.getElementById('owl').onclick = function (){
//     alert("Owl Clicked")

// }

// Best Approach

// document.getElementById('owl').addEventListener('click', function(){
//     alert("Owl Clicked Again.")
// },false);

// attachEvent
// jQuery - on

// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altKey, ctrlKey, shiftKey, keyCode

// document.getElementById('owl').addEventListener('click', function(e){
//     console.log(e)
// },true);

// document.getElementById('images').addEventListener('click', function(e){
//     console.log("Clicked inside the ul")
// },false);



// document.getElementById('owl').addEventListener('click', function(e){
//     console.log("Owl clicked !");
//     e.stopPropagation()

// },false);


// document.getElementById('google').addEventListener('click', function(e){    
//     e.preventDefault();
//     e.stopPropagation()
//     console.log("Google Clicked.");
// }, false)


// new

document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.tagName)

    if (e.target.tagName === 'IMG'){
        console.log(e.target.id)

        let removeIt = e.target.parentNode
        
        // removeIt.remove() or,
        removeIt.parentNode.removeChild(removeIt)
    }
     //
    

},false)