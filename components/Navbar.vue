<script setup lang="ts">
import {
  HomeIcon,
  FireIcon,
  UserCircleIcon,
  UserPlusIcon,
  PaperAirplaneIcon,
} from '@heroicons/vue/24/outline/index.js'

const buttons = [
  {
    name: 'Overview',
    icon: HomeIcon,
    to: '/',
    divider: true,
  },
  {
    name: 'Ship',
    icon: PaperAirplaneIcon,
    to: '/ship',
    divider: false,
  },
  {
    name: 'Main room',
    icon: UserCircleIcon,
    to: '/main-room',
    divider: true,
  },
]
</script>

<template>
  <div class="btm-nav h-16 shadow-inner">
    <div class="sidebar-icon" v-for="button in buttons" :key="button.name">
      <NuxtLink :to="button.to">
        <component
          :is="button.icon"
          class="h-5 w-5"
          viewBox="0 0 24 24"
          aria-hidden="true"
        />
      </NuxtLink>
      <NuxtLink :to="button.to">
        <span class="btm-nav-label">{{ button.name }}</span>
      </NuxtLink>
    </div>
  </div>
</template>
