
// document.getElementById('form').addeventlistener('submit',(e)=>{
//     e.preventDefault()
//     const name = document.getElementById('name')
//     const mail = document.getElementById('mail')
//     const password = document.getElementById('password')
//     const form = document.getElementById('form')
//     const errorElement = document.getElementById('error')
//     document.querySelectorAll('.error').forEach((item) => item.innerText='')
//     var output = {
//         name:'',email:'',phone:'',language:'',dob:'',gender:''
//     }
//   var errorFlag=false
//   if (name&&!name.value) {
//     errorFlag =true
//     document.querySelector('.name-error').innerText='Name is required'
//   }
//   if (password.value === '') {
//     errorFlag =true
//     document.querySelector('.password-error').innerText='Password is required'
//   }

//   if (password.value.length <= 6) {
//     errorFlag=true
//     messages.push('Password must be longer than 6 characters')
//   }

//   if (password.value.length >= 20) {
//     errorFlag=true
//     messages.push('Password must be less than 20 characters')
//   }

// if(errorFlag === false){
//     output.name=name.value;
//     output.password=password.value;
//     console.log('',output);
// }else{
//     console.log('errorooo');
// }
// })


// document.querySelector('#form').addEventListener('submit',(e) =>{
//     e.preventDefault();
    
// } )

// function validate( data={} ){

// }
document.querySelector('#inputform').addEventListener('submit',(e)=>{
    e.preventDefault()
    const name=document.getElementById('name')
    const mail=document.getElementById('mail')
    const phone=document.getElementById('phone')
    const date=document.getElementById('date')
    const password=document.getElementById('password')
   const error_element=document.getElementById('error')
   const gender=document.querySelector('.gender:checked')
   const state=document.getElementById('state')
   const check=document.querySelectorAll('.common:checked')
    document.querySelectorAll('.error').forEach((details)=>details.innerText='');
    var flag=false;
    if (name && !name.value) {
        flag=true
        document.querySelector('.error-name').innerText='name is required'
        
    }
    if (mail && !mail.value) {
        flag=true
        document.querySelector('.error-mail').innerText='email is required'
        
    }
    if (phone&& !phone.value) {
        flag=true
        document.querySelector('.error-phone').innerText='number is required'
        
    }
    // &&new Date(date.value) < new Date('2000-01-01')
    if (date && !date.value) {
        flag=true
        document.querySelector('.error-date').innerText='date is required'
        
    }
    if (password&& !password.value) {
        flag=true
        document.querySelector('.error-password').innerText='password is required'
        
    }
    if (phone&& !phone.value) {
        flag=true
        document.querySelector('.error-phone').innerText='number is required'
    }
    if(!gender){
        flag=true;
        document.querySelector('.error-gender').innerText='select options'
    }
    if ( state&& !state.value) {
        flag=true
        document.querySelector('.error-state').innerText='state is required'
    }
    if(check.length<2){
        flag=true
        document.querySelector('.error-language').innerText='you need to select atleast two'
    }
})
function toggleMenu(tabs){
    document.querySelectorAll('.routes').forEach((details)=>details.style.background="transparent")
    document.querySelector('#'+tabs).style.background="red"
}
