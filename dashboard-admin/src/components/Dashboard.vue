<template>
  <h1>Dashboard</h1>
  {{ users }}
</template>

<script>
  import { useUsersStore } from '@/store/users';
  import { mapStores, mapState} from 'pinia';

export default {
    name: 'UserDashboard',
    computed: {
      ...mapStores(useUsersStore),
      ...mapState(useUsersStore, ['users'])
    },
    data() {
        return {
            message: ''
        }
    }
}
</script>

<style>

</style>