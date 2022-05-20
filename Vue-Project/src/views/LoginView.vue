<template>

  <div class="login">
    <h1>Login</h1>

    <form>
      <fieldset>
          <label>Email</label>
            <input v-model.trim.lazy="email" type="email" placeholder="Your Email" required

            class=" peer 
            focus: outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            invalid:border-red-500 invalid:text-red-600
            focus:invalid:border-red-500 focus:invalid:ring-red-500
            ">
          <p class="invisible peer-invalid:visible text-red-600 italic text-center">Invalid Email Address</p>

          <label>Password</label>
            <input v-model.trim.lazy="password" type="password" placeholder="Your Password" required minLength=8 
            class=" peer 
            focus: outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            invalid:border-red-500 invalid:text-red-600
            focus:invalid:border-red-500 focus:invalid:ring-red-500
            ">
          <p class="invisible peer-invalid:visible text-red-600 italic text-center">Password is required</p>
        </fieldset>
  </form>

  <div class="text-center">
        <button  :disabled="isCompleted" class= "disabled:bg-slate-500 disabled:text-white"> Signup </button>
        </div>

  <div class="text-center">
    <button> Signup Instead </button>
  </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },

  computed: {

    isCompleted: function() {
    	return !this.email || !this.password;
    },
  }
};

</script>
