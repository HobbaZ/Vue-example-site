<script>
export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
    }
  }
}
</script>

<template>
  <div>

  <h1>Signup</h1>

    <form>
        <div class="field">
          <label class="label">First Name</label>
          <div class="control">
            <input v-model="firstname" class="input" type="text" placeholder="Text input">
          </div>
        </div>

        <div class="field">
          <label class="label">Last Name</label>
          <div class="control">
            <input v-model="lastname" class="input" type="text" placeholder="Text input">
          </div>
        </div>

        <div class="field">
          <label class="label">Username</label>
          <div class="control">
            <input v-model="username" class="input" type="text" placeholder="Text input">
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input v-model="email" class="input" type="email" placeholder="Your Email">
          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input v-model="password" class="input" type="password" placeholder="Create a Password">
          </div>
        </div>

    </form>

    <div>
    <h3>Your Details</h3>
    <p>First Name: {{ firstname }}</p>
    <p>Last Name: {{ lastname }}</p>
    <p>Username: {{ username }}</p>
    <p>Email: {{ email }}</p>

    </div>

    <button> Signup </button>
    <button> Login Instead </button>


</div>
</template>