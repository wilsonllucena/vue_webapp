<template>
  <TransitionRoot as="template" :show="sidebarOpen">
    <Dialog
      as="div"
      class="fixed inset-0 flex z-40 lg:hidden"
      @close="sidebarOpen = false"
    >
      <TransitionChild
        as="template"
        enter="transition-opacity ease-linear duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
      </TransitionChild>
      <TransitionChild
        as="template"
        enter="transition ease-in-out duration-300 transform"
        enter-from="-translate-x-full"
        enter-to="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leave-from="translate-x-0"
        leave-to="-translate-x-full"
      >
        <div
          class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white"
        >
          <TransitionChild
            as="template"
            enter="ease-in-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in-out duration-300"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="absolute top-0 right-0 -mr-12 pt-2">
              <button
                type="button"
                class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                @click="sidebarOpen = true"
              >
                <span class="sr-only">Close sidebar</span>
                <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </TransitionChild>
          <div class="flex-shrink-0 flex items-center px-4">
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-purple-500-mark-gray-700-text.svg"
              alt="Workflow"
            />
          </div>
          <div class="mt-5 flex-1 h-0 overflow-y-auto">
            <nav class="px-2">
              <div class="space-y-1">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  :class="[
                    item.current
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
                    'group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md',
                  ]"
                  :aria-current="item.current ? 'page' : undefined"
                >
                  <component
                    :is="item.icon"
                    :class="[
                      item.current
                        ? 'text-gray-500'
                        : 'text-gray-400 group-hover:text-gray-500',
                      'mr-3 flex-shrink-0 h-6 w-6',
                    ]"
                    aria-hidden="true"
                  />
                  {{ item.name }}
                </a>
              </div>
            </nav>
          </div>
        </div>
      </TransitionChild>
      <div class="flex-shrink-0 w-14" aria-hidden="true">
        <!-- Dummy element to force sidebar to shrink to fit close icon -->
      </div>
    </Dialog>
  </TransitionRoot>
  <div
    class="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:pt-5 lg:pb-4 lg:bg-gray-100"
  >
    <div class="flex items-center flex-shrink-0 px-6">
      <img
        class="h-8 w-auto"
        src="https://tailwindui.com/img/logos/workflow-logo-purple-500-mark-gray-700-text.svg"
        alt="Workflow"
      />
    </div>
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div class="mt-6 h-0 flex-1 flex flex-col overflow-y-auto">
      <!-- User account dropdown -->
      <Menu as="div" class="px-3 relative inline-block text-left">
        <div>
          <MenuButton
            class="group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500"
          >
            <span class="flex w-full justify-between items-center">
              <span class="flex min-w-0 items-center justify-between space-x-3">
                <img
                  class="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                  alt=""
                />
                <span class="flex-1 flex flex-col min-w-0">
                  <span class="text-gray-900 text-sm font-medium truncate">
                    Jessy Schwarz
                  </span>
                  <span class="text-gray-500 text-sm truncate">
                    @jessyschwarz
                  </span>
                </span>
              </span>
              <SelectorIcon
                class="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
              />
            </span>
          </MenuButton>
        </div>
        <transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <MenuItems
            class="z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
          >
            <div class="py-1">
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                >
                  Sair
                </a>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
      <!-- Sidebar Search -->
      <div class="px-3 mt-5">
        <Listbox as="div" v-model="selected">
          <ListboxLabel class="block text-sm font-medium text-gray-700">
            Evento
          </ListboxLabel>
          <div class="mt-1 relative">
            <ListboxButton
              class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <div class="flex items-center">
                <span
                  :aria-label="selected.online ? 'Online' : 'Offline'"
                  :class="[
                    selected.online ? 'bg-green-400' : 'bg-gray-200',
                    'flex-shrink-0 inline-block h-2 w-2 rounded-full',
                  ]"
                />
                <span class="ml-3 block truncate">{{ selected.name }}</span>
              </div>
              <span
                class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
              >
                <SelectorIcon
                  class="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </ListboxButton>

            <transition
              leave-active-class="transition ease-in duration-100"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <ListboxOptions
                class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
              >
                <ListboxOption
                  as="template"
                  v-for="event in events"
                  :key="event.id"
                  :value="event"
                  v-on:click="handleSelect(event)"
                  v-slot="{ active, selected }"
                >
                  <li
                    :class="[
                      active ? 'text-white bg-indigo-600' : 'text-gray-900',
                      'cursor-default select-none relative py-2 pl-3 pr-9',
                    ]"
                  >
                    <div class="flex items-center">
                      <span
                        :class="[
                          event.online ? 'bg-green-400' : 'bg-gray-200',
                          'flex-shrink-0 inline-block h-2 w-2 rounded-full',
                        ]"
                        aria-hidden="true"
                      />
                      <span
                        :class="[
                          selected ? 'font-semibold' : 'font-normal',
                          'ml-3 block truncate',
                        ]"
                      >
                        {{ event.name }}
                        <span class="sr-only">
                          is {{ event.online ? 'online' : 'offline' }}
                        </span>
                      </span>
                    </div>

                    <span
                      v-if="selected"
                      :class="[
                        active ? 'text-white' : 'text-indigo-600',
                        'absolute inset-y-0 right-0 flex items-center pr-4',
                      ]"
                    >
                      <CheckIcon class="h-5 w-5" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
      </div>
      <!-- Navigation -->
      <nav class="px-3 mt-6">
        <div class="space-y-1">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            :class="[
              item.current
                ? 'bg-gray-200 text-gray-900'
                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
              'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
            ]"
            :aria-current="item.current ? 'page' : undefined"
          >
            <component
              :is="item.icon"
              :class="[
                item.current
                  ? 'text-gray-500'
                  : 'text-gray-400 group-hover:text-gray-500',
                'mr-3 flex-shrink-0 h-6 w-6',
              ]"
              aria-hidden="true"
            />
            {{ item.name }}
          </a>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import {
  Dialog,
  DialogOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'
import {
  ClockIcon,
  HomeIcon,
  MenuAlt1Icon,
  ViewListIcon,
  XIcon,
} from '@heroicons/vue/outline'
import {
  ChevronRightIcon,
  DotsVerticalIcon,
  SearchIcon,
  SelectorIcon,
  CheckIcon,
} from '@heroicons/vue/solid'
import api from '@/services/apiClient.js'

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon, current: true },
  {
    name: 'Palestrantes',
    href: '/palestrantes',
    icon: ViewListIcon,
    current: false,
  },
  { name: 'Inscritos', href: '#', icon: ClockIcon, current: false },
]

export default {
  components: {
    Dialog,
    DialogOverlay,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    ChevronRightIcon,
    DotsVerticalIcon,
    MenuAlt1Icon,
    SearchIcon,
    SelectorIcon,
    XIcon,
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    CheckIcon,
  },

  setup() {
    const sidebarOpen = ref(false)

    return {
      navigation,
      sidebarOpen,
    }
  },
  data() {
    return {
      selected: {},
      events: [],
      eventsSelected: {},
    }
  },
  methods: {
    async fetchData() {
      const { data } = await api.get(`/events/user/all`)
      data.forEach((event) => {
        this.events.push({
          id: event.id,
          name: event.name,
          online: true,
        })
      })

      const eventSelected = localStorage.getItem('eventSelected')

      if (eventSelected) {
        this.selected = JSON.parse(eventSelected)
      } else {
        this.selected = ref(this.events[0])
      }
    },

    async handleSelect(event) {
      if (event.id == 1) {
        localStorage.setItem('eventSelected', '')

        this.$store.commit('setEventSelected', [])
        return
      }
      this.selected = event

      const { data } = await api.get(`/events/${event.id}`)

      this.eventsSelected = {
        id: data.id,
        name: data.name,
        online: true,
      }

      localStorage.setItem('eventSelected', JSON.stringify(this.eventsSelected))

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
    this.events.push({
      id: 1,
      name: 'Selecione um evento',
      online: true,
    })

    const eventSelected = localStorage.getItem('eventSelected')
    this.$store.commit('setEventSelected', eventSelected)

    this.fetchData()
  },
}
</script>
