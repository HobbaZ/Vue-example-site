<template>

  <div class="login">
    <h1>Login</h1>

    <form>
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input v-model="email" class="input" type="email" placeholder="Your Email">
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input v-model="password" class="input" type="password" placeholder="Your Password">
        </div>
      </div>
  </form>

  <button> Login </button>
  <button> Signup Instead </button>

  </div>
</template>
