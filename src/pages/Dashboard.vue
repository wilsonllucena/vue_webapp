<script>
import CardDash from '../components/Card/CardDash.vue'
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

  components: { CardDash },
}
</script>
<template>
  <CardDash />
</template>
