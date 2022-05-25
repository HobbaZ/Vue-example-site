<template>
  <div class="profile">
    <h1>Profile page</h1>
    <UserInfo />

  </div>
</template>

<script>

import UserInfo from '../components/UserInfo.vue'
import { Greeting } from '../utils/timeGreeting'

export default {
  components: {
    UserInfo
  }
}

</script>
