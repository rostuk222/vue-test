<template>
  <header class="header">
    <div class="logo">
      <nuxt-link to="/">
        <img src="https://quwi.com/img/quwi-logo.png" width="30px" height="30px">
      </nuxt-link>
    </div>
    <nav class="nav">
      <div class="navUser">
        <button class="navLink">
          <nuxt-link to="/projects">Projects</nuxt-link>
        </button>
        <button class="navLink" @click.prevent="logOut">Logout</button>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "nav-bar",
  computed: {
    ...mapState(["auth"])
  },
  methods: {
    logOut() {
      var res = this.$auth.logout()
    }
  }
};
</script>

<style>
.header{
    background: white;
    height: 60px;
    border-bottom: solid 2px #BABABA;
}
.logo{
    float:left;
    padding: 15px;
    margin-left: 20px;
}
.nav{
float: right;
margin-right: 20px;
}
.navLink{
    background: none;
    border: none;
    color: #a6a6a6;
    padding: 20px;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: bold;
}
.navLink > a{
    text-decoration: none;
    color: #a6a6a6;
}
</style>