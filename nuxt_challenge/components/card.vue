<template>
  <!-- TODO: You may need to update some of these divs with certain classes from bulma CSS -->
  <div>
    <div>
      <div class="columns is-mobile is-multiline">
         

<div v-for="(user, index) in users" :key="index" class="column is-12-mobile is-4-desktop is-6-tablet">
   <nuxt-link :to="`/users/${user.userId}`">   
    <h4 class="title is-4">{{user.userObject.quote}}</h4>
    <div class="columns is-mobile">
      <div class="column is-narrow">
        <figure class="image is-32x32 ">
          <img class="is-rounded" v-bind:src=(user.userObject.avatar)>
        </figure>
      </div>
      <div class="column">
        <span class="is-half">{{user.userObject.firstName}} {{user.userObject.lastName}}</span>
      </div>
    </div>
    </nuxt-link>
</div>
       
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  props: {
    users: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {}
}
</script>

<style>
</style>
