<template>
<div>
    <div class="backContainer">
      <div class="backBlock">
        <button class="backLink">
          <nuxt-link to="/projects">Back</nuxt-link>
        </button>
      </div>
  </div>
  <div class="projectItem">
      <label for="projectName">Name</label>
<input id="projectName" v-model="name"/>
<button class="projectSave"  v-on:click="saveProject">Ok</button>
  </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            id: 0,
            name: ''
        }
    },
    methods:{
async getProject() {
  let res = await this.$store.dispatch("getProject", this.id);
  this.name = res.project.name;
},
async saveProject() {
await this.$store.dispatch("updateProject", { id: this.id, name: this.name});
}
    },
mounted() {
    this.id = this.$route.params.id;
    this.getProject()
  }
}
</script>

<style>
.backContainer{
    background-color: #c1c8d2;
}
.backLink {
    background-color: #cecece;
    border: solid 2px #c6c6c6;
    padding: 10px 0px;
    margin: 10px 0;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: bold;
    border-radius: 3px;
}
.backLink > a {
    text-decoration: none;
    color: black;
    padding: 10px 20px;
}
.backBlock{
    width: 35%;
    margin: auto;
}
.projectItem{
    font-size: large;
    padding: 20px;
    width: 35%;
    margin: auto;
    margin-top: 20px;
    background-color: white;
    border: solid 2px #e3e3e3;
    border-radius: 3px;
    height: 120px;
}
.projectItem label{
margin-right: 15%;
margin-left: 10px;
}
.projectItem input {
    font-size: large;
    padding: 8px;
    border: solid 2px #e3e3e3;
    border-radius: 3px;
    width:45%;
}
.projectSave{
  padding: 13px 15px 10px 15px;
    color: white;
    background-color: #395378;
    border: none;
    border-radius: 3px;
    margin-left: 5px;
    font-size: 70%;
    text-transform: uppercase;
}
</style>