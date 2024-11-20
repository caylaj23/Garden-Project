<script setup>


function signup() {

const params = {
method: "POST",
body: JSON.stringify({firstname: firstName.value, email: email.value}),
headers: {
Accept: "application/json",
"Content-Type": "application/json"
}
}
fetch('backend-garden-project.vercel.app://localhost:3000/signup', params)
.then(userinfo =>{  
    alert("Thank you for signing up! You're information has been recorded")
    return userinfo
})
}

function login(){
router.push('/login')
}
import { ref } from 'vue';

let email = ref()
let firstName = ref()

</script>

<template>

    <div class="layout">
    <h1>Sign Up Here For Our Newsletter</h1>
    <p>Stay in the know</p>
    <div class="signup">
        <div class="container-1">
            <br>
            <h1>First Name</h1>
            <input type="text" class="search-bar" placeholder="Enter Your First Name" v-model="firstName">
            <h1>Email</h1>
            <input class="search-bar" type="text" placeholder="Email" v-model="email" />
            <br />
            <button @click="signup()">Sign Up</button>
        </div>
        <div class="container-2">
            <img src="https://images.pexels.com/photos/28996327/pexels-photo-28996327/free-photo-of-vibrant-sunflower-bloom-in-lush-greenery.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="">
        </div>
    </div>
    </div>

</template>

<style scoped>

.signup {
  display: flex;
  text-align: center;
  background-color: #babd8d;
  height: 40rem;
  width: 60%;
  border: 2px solid black;
  margin-top: 10%;
  justify-content: space-between;
}

img {
    height:160%;
    overflow: hidden;
    width: auto;
    display: flex;
    flex-direction: column;
}

button {
  background-color: gray;
  border: none;
  margin: 5%;
  color: white;
  padding: 10px 32px;
  font-size: 16px;
  transition: 0.3s;
  align-items: center;
}

button:hover {
  border: black solid 4px;
  background-color: #babd8d;
  color: white;
}

.login-button {
    margin: 5%;
}

.search-bar {
  height: 46px;
  border-radius: 48px;
  border: 0.5px solid lightgrey;
  width: 100%;
  padding-right: 40px;
  padding-left: 10px;
}
 .container-1 {
  display: flex;
flex-direction: column;
 }

 .container-2 {
display: flex;
flex-direction: column;
 }

 .layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 }
</style>
