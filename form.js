let firstName = document.getElementById('firstname')
let lastName = document.getElementById('lastname')
let submit = document.querySelector('submit')

submit.addEventListener('click',()=>{
    document.write(`My full name is : ${firstName.value}
     ${lastName.value}`)
})