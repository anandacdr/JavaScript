const form = document.querySelector('form')

// this usecase will give us empty value
// const height = parseInt(document.querySelector('#height').value)


form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)

    const weight = parseInt(document.querySelector('#weight').value)

    const results = document.querySelector('#results')

    const bmiGuide = document.querySelector('#bmi-guide')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please, Give a valid height ${height}.`
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please, Give a valid weight ${weight}.`
    } else{
       const bmi =  (weight / ((height*height)/10000)).toFixed(2);
l                                                                                   
       let classification = '';

       if (bmi < 18.6){
        classification = 'Under Weight';
       }
       else if (bmi >= 18.6 && bmi <= 24.9) {
        classification = 'Normal Range'
       }
       else if (bmi > 24.9) {
        classification = "Overweight";
       }

       // show the result
       results.innerHTML = ` <strong>BMI Level is  <span>${bmi}</span> (${classification})</strong>`;
    }

   
});