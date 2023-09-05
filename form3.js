let firstName = document.getElementById('firstname')
let gender = document.getElementById('gender')
let address = document.getElementById('inputAddress')
let city = document.getElementById('city')
let dob = document.getElementById('dob')

let submit = document.getElementById('submit')

submit.addEventListener('click',()=>{
    document.write(`My full name is : 
    ${firstName.value} <br>
    Gender: ${gender.value} <br>
    Dob: ${dob.value}<br>
    Address: ${address.value}<br>
    City: ${city.value}<br>
    `)
})