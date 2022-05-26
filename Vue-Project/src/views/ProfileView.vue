<template>
  <div class="profile">
    <h1>Profile page</h1>
    <UserInfo />

  </div>
</template>

<script>

import UserInfo from '../components/UserInfo.vue'
import { Greeting } from '../utils/timeGreeting'
import { GET_USER } from '../GraphQL/grapql'

export default {
  components: {
    UserInfo
  }

  apollo: {
    query: GET_USER,
    variables: {
      firstname: this.firstname,
    }
  },
}

</script>
