let firstName = document.getElementById('firstname')
let lastName = document.getElementById('lastname')
let address = document.getElementById('address')
let emailId = document.getElementById('email')
let phoneNo = document.getElementById('phoneNo')
let pincode = document.getElementById('pincode')
let dob = document.getElementById('dob')
let gender = document.getElementById('gender')
let submit = document.querySelector('submit')

submit.addEventListener('click',()=>{
    document.write(`My full name is : 
    ${firstName.value}
    ${lastName.value}
    ${address.value}
    ${emailId.value}
    ${phoneNo.value}
    ${pincode.value}
    ${dob.value}
    ${gender.value}`)
})