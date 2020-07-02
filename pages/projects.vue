<template>
  <div class="projectContainer">
<NavBar/>
<nuxt-child/>
  </div>
</template>

<script>
import NavBar from '~/components/navBar.vue'

export default {
    middleware: "auth",
    components: {
    NavBar
  }
}
</script>

<style>
.projectContainer{
    background-color: #f4f4f4;
    width: 100%;
}
</style>