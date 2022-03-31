<script>
import { RouterView } from 'vue-router'
import Admin from '@/components/Admin.vue'
import { useRoute } from 'vue-router'

export default {
  name: 'App',
  components: {
    RouterView,
    Admin,
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
    <Admin>
      <RouterView />
    </Admin>
  </div>
</template>
