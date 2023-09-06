// let firstName = document.getElementById('firstname')
// let gender = document.getElementById('input[name="gender"]:checked')
// let address = document.getElementById('inputAddress')
// let city = document.getElementById('city')
// let dob = document.getElementById('dob')

// let submit = document.getElementById('submit')

// submit.addEventListener('click',()=>{
//     document.write(`My full name is : 
//     ${firstName.value} <br>
//     Gender: ${gender.value} <br>
//     Dob: ${dob.value}<br>
//     Address: ${address.value}<br>
//     City: ${city.value}<br>
//     `)
// })
function submitForm(event){
    event.preventDefault();
    let firstName = document.getElementById('firstname').value;
    let gender = document.getElementById('input[name="gender"]:checked').value
    let address = document.getElementById('inputAddress').value
    let city = document.getElementById('city').value
    let dob = document.getElementById('dob').value

    document.getElementById('showName').innerHTML = "first name:" + firstName
    document.getElementById('showGender').innerHTML = "gender:" + gender 
    document.getElementById('showDob').innerHTML = "Dob :" + dob
    document.getElementById('showAddress').innerHTML = "Address:" + address
    document.getElementById('showCity').innerHTML = "City:" + city 
}