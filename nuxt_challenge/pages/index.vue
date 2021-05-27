<template>
  <div>
    <card :users="users" />
  </div>
</template>

<script>
import users from '../data'
import card from '~/components/card'

export default {
  components: {
    card
  },
  data() {
    return {
      users
    }
  }
}
</script>

<style></style>
