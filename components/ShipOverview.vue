<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/20/solid/index.js'
</script>

<template>
  <div
    class="flex min-w-max flex-col items-center space-x-4 rounded-xl p-6 shadow-lg"
  >
    <div class="flex min-w-full flex-row">
      <div class="text-2xl font-bold">Ship overview</div>
      <div class="grow"></div>
      <div>
        <button class="btn btn-circle m-auto h-8 w-8">
          <component :is="ArrowRightIcon" aria-hidden="true" />
        </button>
      </div>
    </div>
    <slot />
  </div>
</template>
