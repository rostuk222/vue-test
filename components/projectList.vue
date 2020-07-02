<template>
<div class="listContainer">
  <ul class="list">
      <li v-for="project in projects" :key="project.id">
          <div class="listItem" @click="editProject(project.id)">
              <div class="listItemImage">
    <img :src="project.logo_url" width="40px" height="40px">
    </div >
    <div class="listItemName">{{project.name}}</div>
    <div class="listItemTime">
        <div>
            <p>{{4280 | toTimeString}}</p>
              <p>{{4280 | toTimeString}}</p>
              <p>{{4280 | toTimeString}}</p>
        </div>
        <div>
            <p>time this week</p>
              <p>this month</p>
              <p>total</p>
        </div>
          </div>
    <div v-if="project.is_active" class="listItemStatus positive">Active</div>
    <div v-else class="listItemStatus negative">Closed</div>
    </div>
  </li>
      </ul>
      </div>
</template>

<script>
export default {
    data(){
        return {
            projects: []
        }
    },
    filters: {
  toTimeString: function (value) {
    if (!value) return '00:00:00'
    return Math.trunc(value/3600) + ':' + Math.trunc((value%3600)/60) + ':' + value%60
  }
},
    methods:{
async getProjects() {
  let res = await this.$store.dispatch("getProjects");
  this.projects = res.projects;
},
editProject(id) {
this.$router.push("/projects/"+id)
}
    },
mounted() {
    this.getProjects()
  }
}
</script>

<style>
.list{
    list-style: none;
    width: 40%;
}
.listContainer{
    justify-content: center;
  align-items: center;
  display: flex;
}
.listItem{
    height: 120px;
    background: white;
    border: solid 2px #e3e3e3;
    border-radius: 3px;
    margin: 20px;
    cursor: pointer;
}
.listItemImage{
    float: left;
    padding: 35px;
}
.listItemStatus,
.listItemName{
    line-height: 110px;
    font-weight: bold;
    font-size: larger;
}
.listItemName{
    float: left;
}
.listItemTime,
.listItemTime div,
.listItemStatus{
    float:right;
}

.listItemStatus{
    width: 20%;
}

.positive{
    color: green;
}
.negative{
    color:red;
}
.listItemTime{
    font-weight: bold;
    margin: 20px;
}

.listItemTime div {
    margin-right: 15px;
}
</style>