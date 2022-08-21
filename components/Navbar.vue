<script setup lang="ts">
import { HomeIcon } from '@heroicons/vue/outline/index.js'

const buttons = [
  {
    name: 'Home',
    icon: HomeIcon,
    to: '/',
    divider: true,
  },
]
</script>

<template>
  <div class="fixed top-0 left-0 flex h-screen w-16 flex-col shadow-lg">
    <div>
      <ul>
        <div>
          <div v-for="button in buttons" :key="button.name">
            <li>
              <NuxtLink :to="button.to">
                <NavbarIcon
                  :name="button.name"
                  :icon="button.icon"
                  :divider="button.divider"
                />
              </NuxtLink>
            </li>
          </div>
        </div>
      </ul>
    </div>
    <div class="grow" />
    <!-- <div>
      <NavbarIcon
        @click="
          setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')
        "
        :icon="$colorMode.preference == 'dark' ? SunIcon : MoonIcon"
      />
    </div> -->
  </div>
</template>
