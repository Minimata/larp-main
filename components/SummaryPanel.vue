<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/20/solid/index.js'

const props = defineProps<{
  title: string
  link?: string
}>()
</script>

<template>
  <div
    class="flex w-full flex-col items-center space-x-4 rounded-xl p-6 shadow-lg"
  >
    <div class="flex w-full flex-row items-center">
      <div class="text-2xl font-bold">{{ title }}</div>
      <div class="grow"></div>
      <button class="btn btn-outline btn-circle h-12 w-12">
        <component :is="ArrowRightIcon" aria-hidden="true" />
      </button>
    </div>
    <slot />
  </div>
</template>
