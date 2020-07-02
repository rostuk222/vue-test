<template>
  <form  class="loginContainer" @submit.prevent="logIn">
    <p class="loginTitle">Login</p>
    <input v-model="email" class="loginInput" placeholder="Email"/>
    <input v-model="password" class="loginInput" type="password" placeholder="Password"/>
    <button class="loginSubmit" type="submit">Login</button>
  </form >
</template>

<script>
export default {
  data() { 
    return {
    password: '',
    email: ''
  };
  },
  methods: {
    async logIn() {
      let data = { password: this.password, email: this.email };
      let res = await this.$auth.loginWith("local", {
        data
      });
      let user = res.data.app_init.user;
      let token = res.data.token;
      this.$auth.setUser(user);
      this.$auth.setUserToken(token)
    }
  }
}
</script>

<style>
.loginContainer{
  min-width: 300px;
}
.loginInput{
    display: block;
    width: 100%;
    padding: 5px;
    margin: 10px;
    min-height:30px;
    text-indent: 5px;
    line-height: 20px;
    border: solid 2px #e3e3e3;
    border-radius: 3px;
}
.loginInput::placeholder {
    color: #d3cac6; 
}
.loginSubmit{
  padding: 8px;
  width: 90px;
  color:white;
  background-color: #395378;
  border: none;
  border-radius: 3px;
  float: left;
  margin-left: 10px;
  margin-top: 10px;
  font-size: 70%;
}
.loginSubmit,
.loginTitle{
    text-transform: uppercase;
    font-weight: bold;
}
.loginTitle{
  font-size: large;
    text-align: left;
    margin-left: 10px;
}
</style>