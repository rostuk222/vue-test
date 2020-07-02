<template>
  <div>
<ProjectList/>
  </div>
</template>

<script>
import ProjectList from '~/components/projectList.vue'

export default {
    middleware: "auth",
    components: {
    ProjectList
  }
}
</script>