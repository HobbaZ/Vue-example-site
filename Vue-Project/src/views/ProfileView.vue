<template>
  <div class="profile">
    <h1>Profile page</h1>
    <UserInfo />

  </div>
</template>

<script>
import { useQuery, useMutation } from '@vue/apollo-composable';
import { QUERY_ME } from '../utils/queries';
import { UPDATE_ME, DELETE_ME } from '../utils/mutations.js'; 
import Auth from '../utils/auth';

import UserInfo from '../components/UserInfo.vue'


export default {
  components: {
    UserInfo
  }
}

  methods: {

  }

</script>
