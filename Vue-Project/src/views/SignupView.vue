<template>
  <div>

  <h1>Signup</h1>

    <form @submit="onSubmit">
        <div class="field">
          <label class="label">First Name</label>
          <div class="control">
            <input v-model.trim.lazy="firstname" class="input" type="text" placeholder="Your First Name" required minLength={2}>
          </div>
          <span>{{validFirstName}}</span>
        </div>

        <div class="field">
          <label class="label">Last Name</label>
          <div class="control">
            <input v-model.trim.lazy="lastname" class="input" type="text" placeholder="Your Last Name" required minLength={2}>
          </div>
          <span>{{validLastName}}</span>
        </div>

        <div class="field">
          <label class="label">Username</label>
          <div class="control">
            <input v-model.trim.lazy="username" class="input" type="text" placeholder="Create a Username">
          </div>
          <span>{{validUsername}}</span>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input v-model.trim.lazy="email" class="input" type="email" placeholder="Your Email">
          </div>
            <span>{{validEmail}}</span>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input v-model="password" class="input" type="password" placeholder="Create a Password">
          </div>
            <span>{{validPassword}}</span>
        </div>

    </form>

    <div>
    <h3>Your Details</h3>

    <p>First Name: {{ firstname }}</p>
    <p>Last Name: {{ lastname }}</p>
    <p>Username: {{ username }}</p>
    <p>Email: {{ email }}</p>

    </div>

    <button :disabled="!firstname"> Signup </button>
    <button> Login Instead </button>
</div>

</template>

<script>

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
    onSubmit() {
      alert("Form successfully submitted");
    },
  },

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
    }
  }
};

</script>