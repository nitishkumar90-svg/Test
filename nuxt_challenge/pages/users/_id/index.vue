<template>
  <div v-if="user" class="container">
    <div style="display: flex; height: 100vh;">
      <div class="content">
        <div class="columns is-centered is-vcentered is-gapless">
          <div class="column">
            <figure class="image center is-128x128">
              <img class="is-rounded" :src="user.avatar" />
            </figure>
            <div>
              <h1 class="title">{{ user.firstName }} {{ user.lastName }}</h1>
            </div>
            <div>
              <h2 class="subtitle is-6">{{ user.address }}</h2>
            </div>
          </div>
        </div>
        <h3 class="subtitle is-3">{{ user.quote }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import users from '../../../data'
export default {
  data() {
    return {
      user: null,
      users
    }
  },
  mounted() {
    let userId = this.$route.params.id
    let singleUser = users.filter(u1 => u1.userId == userId)
    this.user =  singleUser[0].userObject
  
  }
}
</script>

<style scoped>
.center {
  margin: auto;
}

.content {
  padding: 10px;
  text-align: center;
  margin: auto;
}

.container {
  max-width: 768px;
  padding: 20px;
}

.vcenter {
  display: flex;
  align-items: center;
}
</style>
