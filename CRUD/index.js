let userData = [];
document.querySelector('#inputform').addEventListener('submit',(e)=>{
    e.preventDefault()
    const name=document.getElementById('name');
   const email=document.getElementById('email');
   const phone=document.getElementById('phone');
   const status=document.getElementById('switch');
   const hit = document.querySelector('#hid');
   
    document.querySelectorAll('.error').forEach((details)=>details.innerText='');
    var flag=false;
    if (name && !name.value) {
        flag=true
        document.querySelector('.error-name').innerText='name is required'
        
    }
    if (email && !email.value) {
        flag=true
        document.querySelector('.error-mail').innerText='email is required'
        
    }
    if (phone&& !phone.value) {
        flag=true
        document.querySelector('.error-phone').innerText='number is required'
        
    }
    if(!flag){
      console.log(status.checked);    
        if(hit.value == ''){
          userData.push({name:name.value,email:email.value,phone:phone.value,status:(status.checked)?1:0}) 
        }else{
          userData=userData.map((item,ind) => {
            if(ind == hit.value){
              return {name:name.value,email:email.value,phone:phone.value,status:(status.checked)?1:0}    
            }else{
              return item;
            }
          }) 
        }
          userDataList(userData)  
        document.getElementById("inputform").reset()
      }
});
function userDataList( data = [] ){
    const itemBody =document.querySelector('#table-data')
    itemBody.innerHTML='';
    data.forEach((item,index) => {
        const row=document.createElement('tr')
        row.innerHTML= `
                    <td>${index+1}</td>
                    <td>${item.name}</td>
                    <td>${item.email}</td>
                    <td>${item.phone}</td>
                    <td>${(item.status == 1)?'<span style="color:green">Active</span>':'<span style="color:red">Inactive</span>'}</td>
                    <td>
                        <button onclick="editItem(${index})"data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</button>
                        <button onclick="deleteItem(${index})">Delete</button>
                    </td>
        `;
        itemBody.appendChild(row)
    })
}
 function deleteItem(index){
    userData=userData.filter((item,ind)=>index!=ind)
    userDataList(userData);
 }
function editItem(index) {
    
    const user = userData[index];
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const statusInput = document.getElementById('switch');
    const hit = document.querySelector('#hid');

    nameInput.value = user.name;
    emailInput.value = user.email;
    phoneInput.value = user.phone;
    statusInput.checked = user.status;
    hit.value=index
}
