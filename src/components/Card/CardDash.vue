<template>
  <div>
    <ul
      role="list"
      class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      <li
        v-for="result in $store.state.events"
        :key="result.name"
        class="col-span-1 flex shadow-sm rounded-md"
      >
        <div
          :class="[
            result.bgColor,
            'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md',
          ]"
        >
          {{ result.initials }}
        </div>
        <div
          class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate"
        >
          <div class="flex-1 px-4 py-2 text-sm truncate">
            <a href="#" class="text-gray-900 font-medium hover:text-gray-600">
              {{ result.name }}
            </a>
            <p class="text-gray-500">{{ result.quantity }}</p>
          </div>
          <div class="flex-shrink-0 pr-2">
            <button
              type="button"
              class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span class="sr-only">Open options</span>
              <DotsVerticalIcon class="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/services/apiClient.js'

export default {
  components: {},
  data() {
    return {
      events: [],
    }
  },
  methods: {
    async fetchData() {
      const eventSelected = localStorage.getItem('eventSelected')
        ? JSON.parse(localStorage.getItem('eventSelected'))
        : null

      if (!eventSelected) {
        return
      }
      const { data } = await api.get(`/events/${eventSelected.id}`)

      this.$store.commit('setEventSelected', [
        {
          name: 'Evento',
          initials: 'EV',
          quantity: data.name,
          bgColor: 'bg-red-600',
        },
        {
          name: 'Palestrantes',
          initials: 'PA',
          quantity: data.speakers.length,
          bgColor: 'bg-green-600',
        },
        {
          name: 'Inscritos',
          initials: 'IS',
          quantity: data.subscribers.length,
          bgColor: 'bg-yellow-600',
        },
      ])
    },
  },
  mounted() {
    this.fetchData()
  },
}
</script>
