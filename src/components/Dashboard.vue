<script>
export default {
  name: 'Dashboard',
  methods: {
    setTitle() {
      this.$store.commit('setPageTitle', 'Dashboard')
    },
  },
  created() {
    this.$store.commit('setPageTitle', 'Dashboard')
  },
}
</script>
<template>
  <h2>Pagina de dashboard</h2>
</template>
