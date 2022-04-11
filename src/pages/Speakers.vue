<template>
  <Datatable :data="speakers" />
</template>

<script>
import api from '@/services/apiClient'
import Datatable from '@/components/Tables/Datatable.vue'
export default {
  data() {
    return {
      speakers: [],
    }
  },
  created() {
    this.$store.commit('setPageTitle', 'Palestrantes')
    const eventSelected = localStorage.getItem('eventSelected')
      ? JSON.parse(localStorage.getItem('eventSelected'))
      : null

    if (!eventSelected) {
      return
    }

    api.get(`/events/${eventSelected.id}`).then((response) => {
      response.data.speakers.forEach((speaker) => {
        this.speakers.push({
          name: speaker.name,
          facebook: speaker.facebook,
          email: speaker.email,
        })
      })
    })
  },

  components: { Datatable },
}
</script>
