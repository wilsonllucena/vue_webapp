<script>
import { RouterView } from 'vue-router'
import { useRoute } from 'vue-router'
import LayoutAdmin from './pages/LayoutAdmin.vue'

export default {
  name: 'App',
  components: {
    RouterView,
    LayoutAdmin,
  },

  computed: {
    isLogin() {
      const route = useRoute()
      if (route.name == 'Login') {
        return true
      } else {
        return false
      }
    },
  },
}
</script>

<template>
  <div v-if="isLogin">
    <RouterView />
  </div>
  <div v-else>
    <LayoutAdmin>
      <RouterView />
    </LayoutAdmin>
  </div>
</template>
