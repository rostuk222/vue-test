<template>
  <div>
    <ProjectEditor/>
  </div>
</template>

<script>
import ProjectEditor from '~/components/projectEditor.vue'

export default {
    middleware: "auth",
    components: {
    ProjectEditor
  }
}
</script>