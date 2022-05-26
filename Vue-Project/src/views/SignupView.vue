<template>

  <div class="signup">

  <h1 class="text-center">Signup</h1>

    <form method ="POST" @submit.prevent="submitForm">
        <fieldset>
          <label>First Name</label>
            <input v-model.trim.lazy="firstname" type="text" placeholder="Your First Name" required minLength=2 

            class=" peer 
            focus: outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            invalid:border-red-500 invalid:text-red-600
            focus:invalid:border-red-500 focus:invalid:ring-red-500
            "/>
          <p class="invisible peer-invalid:visible text-red-600 italic text-center">{{validFirstName}}</p>

          <label>Last Name</label>
            <input v-model.trim.lazy="lastname" type="text" placeholder="Your Last Name" required minLength=2 

            class=" peer 
            focus: outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            invalid:border-red-500 invalid:text-red-600
            focus:invalid:border-red-500 focus:invalid:ring-red-500
            "/>
          <p class="invisible peer-invalid:visible text-red-600 italic text-center">{{validLastName}}</p>

          <label>Username</label>
            <input v-model.trim="username" type="text" placeholder="Create a Username" required minLength=2

            class=" peer 
            focus: outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            invalid:border-red-500 invalid:text-red-600
            focus:invalid:border-red-500 focus:invalid:ring-red-500
            "/>
          <p class="invisible peer-invalid:visible text-red-600 italic text-center">{{validUsername}}</p>

          <label>Email</label>
            <input v-model.trim.lazy="email" type="email" placeholder="Your Email" required

            class=" peer 
            focus: outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            invalid:border-red-500 invalid:text-red-600
            focus:invalid:border-red-500 focus:invalid:ring-red-500
            "/>
          <p class="invisible peer-invalid:visible text-red-600 italic text-center">{{validEmail}}</p>

          <label>Password</label>
            <input v-model.trim.lazy="password" type="password" placeholder="Create a Password" required minLength=8 
            class=" peer 
            focus: outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            invalid:border-red-500 invalid:text-red-600
            focus:invalid:border-red-500 focus:invalid:ring-red-500
            "/>
          <p class="invisible peer-invalid:visible text-red-600 italic text-center">{{validPassword}}</p>
          </fieldset>

        <div class="text-center">
        <button  :disabled="isCompleted" class= "disabled:bg-slate-500 disabled:text-white"> Signup </button>
        </div>

        <div class="text-center">
        <button> Login Instead </button>
        </div>
    </form>
    
    </div>
</template>

<script>
import { CREATE_USER } from '../GraphQL/grapql'

//User input data
export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
    }
  },

  methods: {
    async submitForm() {

      const firstname = this.firstname
      const lastname = this.lastname
      const username = this.username
      const email = this.email
      const password = this.password

      const result = await this.$apollo.mutate({
      mutation: CREATE_USER,
      variables: {
      firstname: this.firstname,
      lastname: this.lastname,
      username: this.username,
      email: this.email,
      password: this.password
    },
    }).then((data) => {
      console.log("Submitting to create user", data)
    }).catch((error) => {
      console.log("Error with signup", error)
      this.firstname = firstname

    })
  }},

  computed: {

    validFirstName() {
      return this.firstname.length <2 ? " Required Field must be at least 2 characters" : ""; 
    }, 

    validLastName() {
      return this.lastname.length <2 ? " Required Field must be at least 2 characters" : ""; 
    },

    validUsername() {
      return this.username.length <2 ? " Required Field must be at least 2 characters" : ""; 
    },

    validPassword() {
      return this.password.length <8 ? " Required Field must be at least 8 characters" : ""; 
    },

    validEmail() {
      let emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      return !emailRegex.test(this.email) ? "Invalid Email" : "";
    },

    isCompleted: function() {
    	return !this.firstname || !this.lastname || !this.username || !this.email || !this.password;
    },
  }
};

</script>