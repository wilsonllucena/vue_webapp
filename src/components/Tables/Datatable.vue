<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="px-4 sm:px-6 lg:px-8" v-if="columns">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">{{ tableName }}</h1>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <button
          v-show="buttonShow"
          type="button"
          class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
        >
          Add user
        </button>
      </div>
    </div>
    <div
      class="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg"
    >
      <table class="min-w-full divide-y divide-gray-300">
        <thead class="bg-gray-50">
          <tr>
            <th
              v-for="column in columns"
              :key="column"
              scope="col"
              class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
            >
              {{ column.toUpperCase() }}
            </th>
            <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6"></th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
          <tr v-for="(columns, index) in valuesCalumns" :key="index">
            <td
              v-for="(result, key) in columns"
              :key="key"
              class="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6"
            >
              {{ result }}
            </td>
            <td class="pl-3 text-right text-sm font-medium sm:pr-6">
              <a href="#" class="text-indigo-600 hover:text-indigo-900">
                Edit
                <span class="sr-only">{{ result }}</span>
              </a>
              <a href="#" class="text-indigo-600 hover:text-indigo-900 pl-3">
                Delete
                <span class="sr-only">{{ result }}</span>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: {},
      valuesCalumns: {},
      dataColumns: [],
    }
  },
  props: {
    buttonShow: Boolean,
    tableName: String,
    data: [],
  },
  methods: {
    getColumns() {
      const values = this.data
      const keys = Object.keys(values[0])
      this.columns = keys
    },

    getValuesColumns() {
      this.valuesCalumns = this.data.map((person) => {
        const keys = Object.keys(person)
        return keys.map((key) => {
          return person[key]
        })
      })
    },
  },
  created() {
    this.getColumns()
    this.getValuesColumns()
  },
}
</script>
