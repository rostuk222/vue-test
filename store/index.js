export const actions = {
    async getProjects() {
      let res = await this.$axios.$get('projects-manage/index')
      return res;
    },
    async getProject(state, id) {
        let res = await this.$axios.$get('projects-manage/' + id)
        return res;
      },
      async updateProject(state, data) {
        let res = await this.$axios.$post('projects-manage/update?id=' + data.id, { name: data.name})
        return res;
      }
  }