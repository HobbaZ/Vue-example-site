<!-- Info for user profile -->
<script>
export default {
  props: ['firstname', 'lastname', 'username', 'email']
}
</script>

<template>
  <h3>Hello, {{ firstname }}</h3>
  <h5>Your current details</h5>
  <p>First Name: {{ firstname }}</p>
  <p>Last Name: {{ lastname }}</p>
  <p>Username: {{ username }}</p>
  <p>Email: {{ email }}</p>
</template>

methods: {
    
}