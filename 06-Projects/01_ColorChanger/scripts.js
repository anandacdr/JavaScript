const buttons = document.querySelectorAll('.button')
// console.log(buttons)

const body = document.querySelector('body')


// Event
buttons.forEach(function(button){
    console.log(button)
    button.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target)

        if (e.target.id === 'grey'){
            body.style.backgroundColor = 'grey'
        }
        if (e.target.id === 'white'){
            body.style.backgroundColor = 'white'
        }
        if (e.target.id === 'crimson'){
            body.style.backgroundColor = 'crimson'
        }
        if (e.target.id === 'yellow'){
            body.style.backgroundColor = 'yellow'
        }
    })

});


